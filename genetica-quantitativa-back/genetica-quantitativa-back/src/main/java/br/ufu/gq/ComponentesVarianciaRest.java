package br.ufu.gq;

import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/componentesVariancia")
public class ComponentesVarianciaRest {

	@RequestMapping(method = RequestMethod.GET,value = "/submeteTabela/{precisao}/{padrao}/{rotulo}/{separador}")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
	public Response submeteTabela (
			@PathVariable("precisao")  Integer precisao , 
			@PathVariable("padrao")    String padrao,
			@PathVariable("rotulo")    String rotulo,
			@PathVariable("separador") String separador,
			@QueryParam("tabela")      String tabela) {
		
		System.out.println(precisao);
		System.out.println(padrao);
		System.out.println(rotulo);
		System.out.println(separador);
		System.out.println(tabela);
		
		
		return Response.status(200).build();
	}
}
