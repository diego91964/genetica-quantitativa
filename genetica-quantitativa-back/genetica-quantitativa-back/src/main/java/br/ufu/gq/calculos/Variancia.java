package br.ufu.gq.calculos;

import java.math.BigDecimal;

public class Variancia {

	public static BigDecimal calculoDeCorrecoes(BigDecimal dados[][], Integer gr) {

		BigDecimal soma = new BigDecimal(0);

		for (BigDecimal linha[] : dados) {

			for (BigDecimal dado : linha) {
				soma.add(dado);
			}
		}

		return soma.divide(new BigDecimal(gr));
	}

	public static BigDecimal calculoSomaDeQuadrado(BigDecimal dados[][], BigDecimal correcao) {

		BigDecimal soma = new BigDecimal(0);
		for (BigDecimal linha[] : dados) {

			for (BigDecimal dado : linha) {
				soma.add(dado.multiply(dado));
			}
		}
		
		return soma.subtract(correcao);
	}

	public static BigDecimal somaLinha (BigDecimal dados[][], Integer coluna){
		
		BigDecimal soma = new BigDecimal(0);
		
		for (int i = 0 ; i < dados.length; i++){
			soma.add(dados[i][coluna]);
		}
		
		return soma;
	}
	
	public static BigDecimal somaColuna (BigDecimal dados[][], Integer coluna){
		
		BigDecimal soma = new BigDecimal(0);
		
		for (int i = 0 ; i < dados.length; i++){
			soma.add(dados[i][coluna]);
		}
		
		return soma;
	}
}
