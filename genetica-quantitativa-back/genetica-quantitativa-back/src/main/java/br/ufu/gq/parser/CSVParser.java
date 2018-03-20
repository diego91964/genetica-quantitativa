package br.ufu.gq.parser;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;

import br.ufu.gq.to.IndividuoVariancia;
import br.ufu.gq.to.Separator;

public class CSVParser {
	
	public IndividuoVariancia [][] parseGenes (InputStream is, Separator separator, br.ufu.gq.to.Charset charset ){
		
		BufferedReader reader  = new BufferedReader(new InputStreamReader(is, Charset.forName(charset.getCharsetString(charset))));
		
		return null;
	}
	
	public IndividuoVariancia [][] parsePlanilha (){
		return null;
	}

}
