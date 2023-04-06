package ca.sheridancollege.blockheads.bridgingblock.controllers;

import ca.sheridancollege.blockheads.bridgingblock.beans.Wallet;
import ca.sheridancollege.blockheads.bridgingblock.repositories.WalletRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/wallets")
@CrossOrigin(origins = "http://localhost:3000")
public class WalletController {
    WalletRepository walletRepo;

    //Get for all wallets(collection)
    @GetMapping(value={"/",""})
    public List<Wallet> getWalletCollection(){
        return walletRepo.findAll();
    }


    //Get - For a single wallet by id
    @GetMapping("/{id}")
    public Wallet getWallet(@PathVariable Long id) {
        Optional<Wallet> wallet = walletRepo.findById(id);
        if (wallet.isPresent()) {
            return walletRepo.findById(id).get();
        } else {
            return null;
        }

    }
    @PostMapping(value={"/",""},headers="content-type=application/json")
    public void postWalletCollection(@RequestBody Wallet wallet){
        wallet.setId(null);
        Wallet w = walletRepo.save(wallet);
    }
}
