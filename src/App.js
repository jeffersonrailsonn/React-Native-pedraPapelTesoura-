import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

const papel = require("./img/papel.png");
const pedra = require("./img/pedra.png");
const tesoura = require("./img/tesoura.png");
const game = [pedra, papel, tesoura];

export default class App extends Component {
    state = {
        player: 0,
        cpu: 0,
        pontosPlayer: 0,
        pontosCpu: 0,
        win: ''
    };

    

    play(j) {
        this.setState({ player: j });
        
        this.resultado(j, this.jogadaCpu())

    }
    jogadaCpu = () => {
        const valorRandom = Math.floor(Math.random() * 3);
        this.setState({ cpu: valorRandom });
        return valorRandom
    };


    resultado(player,cpu) {
        // 0 = pedra, 1 = papel, 2 = tesoura
        if (player == 0 && cpu == 2) {
            this.setState({ pontosPlayer: this.state.pontosPlayer + 1 });
            this.setState({ win: "p" });
        } else if (player == 0 && cpu == 1) {
            this.setState({ pontosCpu: this.state.pontosCpu + 1 });
            this.setState({ win: "c" });
        } else if (player == 0 && cpu == 0) {
            this.setState({ win: "e" });
        } else if (player == 1 && cpu == 0) {
            this.setState({ pontosPlayer: this.state.pontosPlayer + 1 });
            this.setState({ win: "p" });
        } else if (player == 1 && cpu == 2) {
            this.setState({ pontosCpu: this.state.pontosCpu + 1 });
            this.setState({ win: "c" });
        } else if (player == 1 && cpu == 1) {
            this.setState({ win: "e" });
        } else if (player == 2 && cpu == 0) {
            this.setState({ pontosCpu: this.state.pontosCpu + 1 });
            this.setState({ win: "c" });
        } else if (player == 2 && cpu == 1) {
            this.setState({ pontosPlayer: this.state.pontosPlayer + 1 });
            this.setState({ win: "p" });
        } else {
            this.setState({ win: "e" });
        }
    }


    render() {
        const { pontosPlayer, pontosCpu, win, player, cpu } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Vamos jogar</Text>

                <View style={styles.containerMenu}>
                    <View style={styles.score}>
                        <Text style={styles.textPontos}>Pontos</Text>
                        <Text style={styles.textPontos}> {pontosPlayer}</Text>
                    </View>

                    <View style={styles.containerGame}>
                        <View style={{ alignItems: "center" }}>
                            <Image
                                style={styles.imagen}
                                source={game[player]}
                            />
                            <Text style={styles.TextGame}> Você {player}</Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Image style={styles.imagen} source={game[cpu]} />
                            <Text style={styles.TextGame}>CPU {cpu}</Text>
                        </View>
                    </View>

                    <View style={styles.score}>
                        <Text style={styles.textPontos}>Pontos</Text>
                        <Text style={styles.textPontos}>{pontosCpu}</Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        syles={styles}
                        onPress={() => this.play(0)}
                    >
                        <Image
                            style={styles.Button}
                            source={require("./img/pedra.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.play(1)}>
                        <Image
                            style={styles.Button}
                            source={require("./img/papel.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.play(2)}>
                        <Image
                            style={styles.Button}
                            source={require("./img/tesoura.png")}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{ fontSize: 20, color: "red", fontWeight: "bold" }}
                >
                    {win == 'c' && 'CPU ganhou' || win == 'p' && 'Você ganhou'|| win == 'e' && 'Empate'}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#b0c4de"
    },

    containerGame: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
        height: 180
    },

    TextGame: {
        color: "red",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 20
    },

    containerMenu: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#e6e6fa",
        margin: 10,
        borderRadius: 20
    },

    score: {
        margin: 1
    },
    textPontos: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "red",
        fontWeight: "bold"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        color: "red"
    },
    imagen: {
        width: 70,
        height: 70,
        margin: 15
    },
    containerImage: {
        backgroundColor: "red"
    },
    containerButton: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20
    },
    Button: {
        width: 70,
        height: 70,
        margin: 15,
        resizeMode: "cover"
    }
});
