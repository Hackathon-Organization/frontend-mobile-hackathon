import { useCallback, useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import ProjetoServices from "../../services/projetos";

const ProjetoScreen = ({ route }) => {
  const projetoId = route.params.projeto;

  const [projeto, setProjetos] = useState({});
  const fetchProjetos = async () => {
    const data = await ProjetoServices.getProjetoById(projetoId);
    setProjetos(data);
  };

  useEffect(() => {
    fetchProjetos();
  }, [projetoId]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchProjetos();
    setRefreshing(false);
  }, []);

  return (
    <View>
      {projeto && projeto.id && (
        <>
          <View>
            <Text style={styles.texto}>{projeto.nome}</Text>
            <Text style={styles.texto}>{projeto.descricao}</Text>
            <Text style={styles.texto}>{projeto.pontuacao}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default ProjetoScreen;
