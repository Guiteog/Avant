import { Modal, View, Text, Pressable } from 'react-native';

type dataModal = {
    visivel: boolean;
    onFechar: () => void;
    onSalvar: (dados : {nome: string; aux: number; nomeAux: string }) => void //Nome canal, aux, cor
}