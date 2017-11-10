package br.ufu.gq.calculos;

import java.math.BigDecimal;
import java.util.List;

import br.ufu.gq.to.Individuo;

public class CalculaMedia {

	public BigDecimal calculaMediaAritmetica (List<BigDecimal> listaDeValores){
		
		BigDecimal soma = new BigDecimal(0d);
		BigDecimal tamanhoLista = new BigDecimal(listaDeValores.size());
		
		for (BigDecimal gd : listaDeValores){
			soma.add(gd);
		}
		
		return soma.divide(tamanhoLista);
		
	}
	
	public BigDecimal calculaMediaPonderada (List<Individuo> individuos){
		
		BigDecimal somaFrequencia = new BigDecimal(0d);
		BigDecimal somaValores = new BigDecimal(0d);
		
		
		for (Individuo gd : individuos){
			somaFrequencia.add(gd.getFrequencia());
			somaValores.add(gd.getValor().multiply(gd.getFrequencia()));
		}
		
		return somaValores.divide(somaFrequencia);
	}
}
