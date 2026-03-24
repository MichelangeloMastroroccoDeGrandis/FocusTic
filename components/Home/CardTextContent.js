import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import createStyles from '../../style/ButtonStyle';
import { useThemeColors, useThemeStyles } from '../../app/context/ThemeContext';

const CardTextContent = ({content, timer, hours, minutes, seconds, onCountdownFinish }) => {
    const colors = useThemeColors();
    const styles = useThemeStyles(createStyles);

    const [time, setTime] = useState({
        hours: Number(hours),
        minutes: Number(minutes),
        seconds: Number(seconds)
    });
    const [countdownActive, setCountdownActive] = useState(false);
    const [countdownFinished, setCountdownFinished] = useState(false);

    useEffect(() => {
        if (!countdownActive) return; 

        const countdown = setInterval(() => {
            setTime((prevTime) => {
                let { hours, minutes, seconds } = prevTime;

                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(countdown);
                    setCountdownActive(false);
                    setCountdownFinished(true)
                    return prevTime;
                }

                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    if (minutes > 0) {
                        minutes -= 1;
                        seconds = 59;
                    } else if (hours > 0) {
                        hours -= 1;
                        minutes = 59;
                        seconds = 59;
                    }
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

            return () => clearInterval(countdown);
        }, [countdownActive]);

        useEffect(() => {
            if (countdownFinished && onCountdownFinish) {
                onCountdownFinish();
            }
        }, [countdownFinished, onCountdownFinish]);
    
        const startCountdown = () => {
            setCountdownActive(true);
            setCountdownFinished(false);
        };
    
        const stopCountdown = () => setCountdownActive(false);
    
        const resetCountdown = () => {
            setCountdownActive(false);
            setCountdownFinished(false);
            setTime({
                hours: Number(hours),
                minutes: Number(minutes),
                seconds: Number(seconds),
            });
        };

    if(timer) {
        return (
            <View style={{ alignItems: 'center' }}>
            {!countdownFinished ? (
                <Text style={{ color: colors.light, fontSize: 18 }}>
                    {content} {'\n'}
                    {String(time.hours).padStart(2, '0')} : {String(time.minutes).padStart(2, '0')} : {String(time.seconds).padStart(2, '0')} {'\n'}
                </Text>
            ) : (
                <Text style={{ color: colors.gold, fontSize: 18 }}>Time's up!</Text>
            )}

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                {!countdownActive && !countdownFinished && (
                    <TouchableOpacity style={styles.buttonRow} onPress={startCountdown}>
                    <Text style={styles.buttonText}>Start</Text>
                  </TouchableOpacity>
                )}
                {countdownActive && 
                    <TouchableOpacity style={styles.buttonRow} onPress={stopCountdown}>
                        <Text style={styles.buttonText}>Stop</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity style={styles.buttonRow} onPress={resetCountdown}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    } else {
        return <Text style={{color: colors.light, fontSize: 18}}>{content} {'\n'}</Text>
    }
}

export default CardTextContent
