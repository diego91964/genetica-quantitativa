package br.ufu.gq.to;

public enum Charset {
	
	UTF8 ("UTF-8") , ISO88591("ISO-8859-1");
	
	String stringCharset;
	
	Charset (String charsetString){
		this.stringCharset = charsetString;
	}
	
	public String getCharsetString (Charset c){
		return this.stringCharset;
	}
	
}
