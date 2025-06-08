package com.example.aulakt

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.tabs.TabLayout
import com.example.aulakt.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Referência ao botão TerceiraTela do XML
        val terceiraTelaButton = findViewById<Button>(R.id.TerceiraTela)

        terceiraTelaButton.setOnClickListener {
            irParaSegundaTela()
        }
    }

    private fun irParaSegundaTela() {
        val segundaTela = Intent(this, Segunda_Tela::class.java)
        startActivity(segundaTela)
    }
}




