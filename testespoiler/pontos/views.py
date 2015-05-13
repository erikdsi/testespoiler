import json
from django.http import HttpResponse
from django.shortcuts import render
from pontos.models import Ponto

def adiciona_ponto(request):
    post = request.POST
    ponto = Ponto(endereco=post.get('endereco'), latitude=post.get('latitude'), longitude=post.get('longitude'))
    resposta = {}
    try:
        ponto.save()
        resposta['sucesso'] = True
    except :
        resposta['sucesso'] = False

    return HttpResponse(json.dumps(resposta), content_type="application/json")

def home(request):
    context = {
        'pontos': Ponto.objects.all()
    }
    return render(request, 'base.html', context);

