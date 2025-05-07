package com.example.aulakt

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.tabs.TabLayout
import com.example.aulakt.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Inicializa o binding corretamente
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Configura o TabLayout (não TableLayout)
        binding.tabLayout.addOnTabSelectedListener(
            object : TabLayout.OnTabSelectedListener {
                override fun onTabSelected(tab: TabLayout.Tab?) {
                    when (tab?.position) {
                        0 -> supportFragmentManager
                            .beginTransaction()
                            .replace(R.id.fragment_container_view, PrimeiraTela())
                            .commit()

                        1 -> supportFragmentManager
                            .beginTransaction()
                            .replace(R.id.fragment_container_view, SegundaTela())
                            .commit()

                        2 -> supportFragmentManager
                            .beginTransaction()
                            .replace(R.id.fragment_container_view, TerceiraTela())
                            .commit()
                    }
                }

                override fun onTabUnselected(tab: TabLayout.Tab?) {
                    // Implementação opcional
                }

                override fun onTabReselected(tab: TabLayout.Tab?) {
                    // Implementação opcional
                }
            }
        )
    }
}