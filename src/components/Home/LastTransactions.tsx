import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../../assets/tokens/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {transactionData} from '../../storage/transaction-data';

export default function HomeLastTransactions() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        flex: 1,
        marginTop: 48,
        paddingHorizontal: 16,
        paddingTop: 24,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 16,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 24,
            color: 'black',
          }}>
          Últimos lançamentos
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color.blue[40],
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 16,
          }}>
          <Text
            style={{
              marginRight: 8,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              lineHeight: 24,
            }}>
            Novo
          </Text>
          <View
            style={{borderWidth: 1, borderColor: 'white', borderRadius: 18}}>
            <AntDesign name="plus" color={'white'} size={18} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {transactionData.map(value => (
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/netflix.png')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 8,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 24,
                  }}>
                  {value.title}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: color.gray[100],
                    lineHeight: 24,
                  }}>
                  {value.date}
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  lineHeight: 24,
                  color: 'red',
                }}>
                - R$ {value.price}
              </Text>
              <Text
                style={{fontSize: 14, color: color.gray[100], lineHeight: 24}}>
                {value.type}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
