
# ✅ Validador de CPF (Brasil)
![image](https://github.com/user-attachments/assets/3746c329-caac-4102-a2b4-dd39bdeef254)

Este projeto verifica se um número de CPF é **válido ou inválido**, de acordo com as regras da Receita Federal do Brasil.

## 🔧 Funcionalidades

- ✅ Validação matemática do CPF
- 🔒 Verificação dos dígitos verificadores
- 🧼 Botão para limpar os campos e o resultado
- 🖋️ Máscara automática no campo de CPF (formato 000.000.000-00)
- 🎨 Ícones visuais de resultado com Font Awesome

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (puro)
- jQuery + jQuery Mask
- Font Awesome

## 🚀 Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Abra o arquivo `index.html` no seu navegador.
3. Digite um CPF e clique em **Validar** para verificar se ele é válido.

---

## 🔎 Como funciona a validação do CPF?

O CPF possui 11 dígitos. Os dois últimos são chamados de **dígitos verificadores**, calculados a partir dos 9 primeiros usando uma fórmula matemática. Isso impede a criação de CPFs inválidos ou com erros de digitação.

### 🔢 Regras para o 1º dígito verificador:

1. Pegamos os 9 primeiros dígitos.
2. Multiplicamos cada número por um peso que vai de **10 até 2** (da esquerda para a direita).
3. Somamos todos os resultados.
4. Multiplicamos essa soma por 10 e dividimos por 11.
5. Se o resultado for maior que 9, o dígito é 0. Caso contrário, é o próprio valor da divisão.

### 🔢 Regras para o 2º dígito verificador:

1. Pegamos os 10 primeiros dígitos (os 9 anteriores + o primeiro dígito verificador).
2. Multiplicamos por pesos de **11 até 2**.
3. Repetimos o mesmo processo de soma, multiplicação e divisão.

---

## 📘 Exemplo prático

CPF base: `123.456.789`

### Cálculo do 1º dígito:
```
1×10 + 2×9 + 3×8 + 4×7 + 5×6 + 6×5 + 7×4 + 8×3 + 9×2 = 210  
(210 × 10) % 11 = 9  
→ 1º dígito verificador = 9
```

### Cálculo do 2º dígito:
```
1×11 + 2×10 + 3×9 + 4×8 + 5×7 + 6×6 + 7×5 + 8×4 + 9×3 + 9×2 = 255  
(255 × 10) % 11 = 9  
→ 2º dígito verificador = 9
```

CPF completo: `123.456.789-09` ✅ **Válido**

---

## 👨‍💻 Autor

Feito com dedicação por **Eribaldo Oliveira**  
🔗 [LinkedIn](https://www.linkedin.com/in/eribaldo-oliveira/)
