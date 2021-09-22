import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import _ from "lodash";

import Card from "./Card";

export default App = () => {
  const [totalColumn, setTotalColumn] = useState([[], []]);

  // const [columnFirstHeight, setColumnFirstHeight] = useState(0);

  console.log(totalColumn);

  const addNewCard = ({ index, columnIndex }) => {
    let newArr = [...totalColumn];
    newArr[columnIndex].push(index);
    setTotalColumn([...newArr]);
  };

  const addNewCloumn = () => {
    setTotalColumn((prevState) => [...prevState, []]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <ScrollView horizontal style={{ flex: 1 }}>
          {totalColumn.map((item, index) => {
            return (
              <View style={styles.column} key={index}>
                <View style={{ flex: 1 }}>
                  {item.length > 0 &&
                    item.map((item, index) => {
                      return <Card num={item} key={index} />;
                    })}
                </View>
                <Pressable
                  style={styles.addBtn}
                  onPress={() =>
                    addNewCard({
                      index: item.length + 1,
                      columnIndex: index,
                    })
                  }
                >
                  <Text style={styles.addBtnText}>Add</Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
        <Pressable style={styles.addBtn} onPress={() => addNewCloumn()}>
          <Text style={styles.addBtnText}>Add</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",

    alignItems: "stretch",
    backgroundColor: "#f2f2f2",
    padding: 8,
    paddingTop: 20,
    flexDirection: "row",
  },

  column: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#FFF",
    padding: 8,
    margin: 8,
    width: 200,
  },
  columnContent: {
    flex: 1,
  },
  addBtn: {
    height: 50,
    backgroundColor: "#412243",
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  topContainer: {
    flex: 1,
  },
});
