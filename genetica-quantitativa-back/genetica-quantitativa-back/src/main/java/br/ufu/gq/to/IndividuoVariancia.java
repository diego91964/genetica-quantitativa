package br.ufu.gq.to;

import java.math.BigDecimal;

public class IndividuoVariancia {

	private Integer cultivar;
	private Integer bloco;
	private BigDecimal valor;
	
	public Integer getCultivar() {
		return cultivar;
	}
	public void setCultivar(Integer cultivar) {
		this.cultivar = cultivar;
	}
	public Integer getBloco() {
		return bloco;
	}
	public void setBloco(Integer bloco) {
		this.bloco = bloco;
	}
	public BigDecimal getValor() {
		return valor;
	}
	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}
	
}
