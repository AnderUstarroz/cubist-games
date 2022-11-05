export type CubistGames = {
  "version": "0.1.2",
  "name": "cubist_games",
  "instructions": [
    {
      "name": "initializeSystemConfig",
      "accounts": [
        {
          "name": "systemAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "systemConfigData",
          "type": {
            "defined": "SystemConfigData"
          }
        }
      ]
    },
    {
      "name": "updateSystemConfig",
      "accounts": [
        {
          "name": "systemAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "systemConfigData",
          "type": {
            "defined": "SystemConfigData"
          }
        }
      ]
    },
    {
      "name": "initializeConfig",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stats",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "configData",
          "type": {
            "defined": "ConfigData"
          }
        }
      ]
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "configData",
          "type": {
            "defined": "ConfigData"
          }
        }
      ]
    },
    {
      "name": "createTerms",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "terms",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "arweaveHash",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateTerms",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "terms",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "arweaveHash",
          "type": "string"
        }
      ]
    },
    {
      "name": "createGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stats",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "gameData",
          "type": {
            "defined": "GameData"
          }
        }
      ]
    },
    {
      "name": "updateGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "gameData",
          "type": {
            "defined": "GameData"
          }
        }
      ]
    },
    {
      "name": "initializePlayerBets",
      "accounts": [
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "playerBets",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "placeSolBet",
      "accounts": [
        {
          "name": "player",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerBets",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "optionId",
          "type": "u8"
        },
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "toggleGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "activate",
          "type": "bool"
        }
      ]
    },
    {
      "name": "settleGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "optionId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "voidGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimSolBet",
      "accounts": [
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerBets",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "betKey",
          "type": "u8"
        },
        {
          "name": "optionId",
          "type": "u8"
        },
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refundSolBet",
      "accounts": [
        {
          "name": "player",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerBets",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "betKey",
          "type": "u8"
        },
        {
          "name": "optionId",
          "type": "u8"
        },
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "collectSolProfits",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "playerBets",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "bets",
            "type": {
              "vec": {
                "defined": "Bet"
              }
            }
          }
        ]
      }
    },
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "https",
            "type": "bool"
          },
          {
            "name": "domain",
            "type": "string"
          },
          {
            "name": "useCategories",
            "type": "bool"
          },
          {
            "name": "allowReferral",
            "type": "bool"
          },
          {
            "name": "fireThreshold",
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "minStep",
            "type": "u64"
          },
          {
            "name": "stakeButtons",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "customStakeButton",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "showPot",
            "type": "bool"
          },
          {
            "name": "designTemplatesHash",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "profitSharing",
            "type": {
              "vec": {
                "defined": "TreasuryShare"
              }
            }
          },
          {
            "name": "terms",
            "type": {
              "vec": {
                "defined": "TermsPDA"
              }
            }
          },
          {
            "name": "categoriesHash",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "state",
            "type": {
              "defined": "GameState"
            }
          },
          {
            "name": "openTime",
            "type": "i64"
          },
          {
            "name": "closeTime",
            "type": "i64"
          },
          {
            "name": "settleTime",
            "type": "i64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "settledAt",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "cashedAt",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "solProfits",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "tokenProfits",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "useToken",
            "type": "bool"
          },
          {
            "name": "allowReferral",
            "type": "bool"
          },
          {
            "name": "fireThreshold",
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "minStep",
            "type": "u64"
          },
          {
            "name": "stakeButtons",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "customStakeButton",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "showPot",
            "type": "bool"
          },
          {
            "name": "designTemplate",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "profitSharing",
            "type": {
              "vec": {
                "defined": "TreasuryShare"
              }
            }
          },
          {
            "name": "termsId",
            "type": "string"
          },
          {
            "name": "termsHash",
            "type": "string"
          },
          {
            "name": "definitionHash",
            "type": "string"
          },
          {
            "name": "image1Hash",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "hasBets",
            "type": "bool"
          },
          {
            "name": "options",
            "type": {
              "vec": {
                "defined": "GameOption"
              }
            }
          },
          {
            "name": "totalBetsClaimed",
            "type": "u32"
          },
          {
            "name": "result",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "category",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "stats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "totalGames",
            "type": "u64"
          },
          {
            "name": "totalSolProfits",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "systemConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "gameFee",
            "type": "u64"
          },
          {
            "name": "betFee",
            "type": "u64"
          },
          {
            "name": "profitFee",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "terms",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "arweaveHash",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Bet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "optionId",
            "type": "u8"
          },
          {
            "name": "stake",
            "type": "u64"
          },
          {
            "name": "optionStakes",
            "type": "u64"
          },
          {
            "name": "paid",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "TermsPDA",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "TreasuryShare",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "share",
            "type": "u16"
          },
          {
            "name": "cashed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "ConfigData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "https",
            "type": "bool"
          },
          {
            "name": "domain",
            "type": "string"
          },
          {
            "name": "useCategories",
            "type": "bool"
          },
          {
            "name": "allowReferral",
            "type": "bool"
          },
          {
            "name": "fireThreshold",
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "minStep",
            "type": "u64"
          },
          {
            "name": "stakeButtons",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "customStakeButton",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "showPot",
            "type": "bool"
          },
          {
            "name": "designTemplatesHash",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "profitSharing",
            "type": {
              "vec": {
                "defined": "TreasuryShare"
              }
            }
          },
          {
            "name": "terms",
            "type": {
              "vec": {
                "defined": "TermsPDA"
              }
            }
          },
          {
            "name": "categoriesHash",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "GameData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openTime",
            "type": "i64"
          },
          {
            "name": "closeTime",
            "type": "i64"
          },
          {
            "name": "settleTime",
            "type": "i64"
          },
          {
            "name": "allowReferral",
            "type": "bool"
          },
          {
            "name": "fireThreshold",
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "minStep",
            "type": "u64"
          },
          {
            "name": "stakeButtons",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "customStakeButton",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "showPot",
            "type": "bool"
          },
          {
            "name": "designTemplate",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "profitSharing",
            "type": {
              "vec": {
                "defined": "TreasuryShare"
              }
            }
          },
          {
            "name": "termsId",
            "type": "string"
          },
          {
            "name": "termsHash",
            "type": "string"
          },
          {
            "name": "definitionHash",
            "type": "string"
          },
          {
            "name": "image1Hash",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "category",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "options",
            "type": {
              "vec": {
                "defined": "GameOption"
              }
            }
          }
        ]
      }
    },
    {
      "name": "GameOption",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "totalStake",
            "type": "u64"
          },
          {
            "name": "totalBets",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "SystemConfigData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "gameFee",
            "type": "u64"
          },
          {
            "name": "betFee",
            "type": "u64"
          },
          {
            "name": "profitFee",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "GameState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Pending"
          },
          {
            "name": "Open"
          },
          {
            "name": "Closed"
          },
          {
            "name": "Voided"
          },
          {
            "name": "Settled"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidFee",
      "msg": "Fee must be between 100 and 10000 (1% to 100.00%)"
    },
    {
      "code": 6001,
      "name": "FeeTooSmall",
      "msg": "The game fee cannot be smaller than the system fee (unless game fee is 0)"
    },
    {
      "code": 6002,
      "name": "ProfitSharingLimit",
      "msg": "ProfitSharing cannot have more than 10 entries"
    },
    {
      "code": 6003,
      "name": "InvalidProfitSharing",
      "msg": "Total profit sharing must be equal to 10000 (100.00%)"
    },
    {
      "code": 6004,
      "name": "DuplicatedProfitSharing",
      "msg": "Profit sharing cannot have duplicated PublicKeys"
    },
    {
      "code": 6005,
      "name": "ProgramTreasuryMissing",
      "msg": "The program treasury must be within the ProfitTreasuries array"
    },
    {
      "code": 6006,
      "name": "TreasuryShareNotFound",
      "msg": "Treasury share public key does not exist"
    },
    {
      "code": 6007,
      "name": "InvalidTreasuryShare",
      "msg": "The program treasury share must be bigger"
    },
    {
      "code": 6008,
      "name": "ShareAlreadyCashed",
      "msg": "The treasury share is already cashed"
    },
    {
      "code": 6009,
      "name": "TermsAlreadyExists",
      "msg": "The terms and conditions already exists"
    },
    {
      "code": 6010,
      "name": "InvalidDesignTemplates",
      "msg": "Design templates must be an array of strings, and each string must have between 1 and 2 alphanumeric characters"
    },
    {
      "code": 6011,
      "name": "InvalidID",
      "msg": "ID must contain between 1 and 4 alphanumeric characters"
    },
    {
      "code": 6012,
      "name": "TermsNotFound",
      "msg": "The selected terms & conditions does not exist"
    },
    {
      "code": 6013,
      "name": "InvalidArweaveHash",
      "msg": "The Arweave hash must be a string of 43 characters"
    },
    {
      "code": 6014,
      "name": "InvalidDesignTemplate",
      "msg": "The selected design template does not exist"
    },
    {
      "code": 6015,
      "name": "InvalidCloseTime",
      "msg": "Close time must be greater than open time"
    },
    {
      "code": 6016,
      "name": "InvalidSettleTime",
      "msg": "Settle time must be greater than close time"
    },
    {
      "code": 6017,
      "name": "EmptyOptions",
      "msg": "At least one game option must be defined"
    },
    {
      "code": 6018,
      "name": "TooManyGameOptions",
      "msg": "Too many game options! Maximum number of options is limited to 20"
    },
    {
      "code": 6019,
      "name": "InvalidOptionOrder",
      "msg": "Options should be arranged in ascending order starting by id=0"
    },
    {
      "code": 6020,
      "name": "AlreadyStarted",
      "msg": "Cannot modify already started games (games with bets)"
    },
    {
      "code": 6021,
      "name": "InvalidOptionInitialStake",
      "msg": "Options initial stake must be 0"
    },
    {
      "code": 6022,
      "name": "InvalidOptionTotalBets",
      "msg": "Options initial total bets must be 0"
    },
    {
      "code": 6023,
      "name": "GameDisabled",
      "msg": "The game is disabled and cannot accept bets or be settled"
    },
    {
      "code": 6024,
      "name": "GameNotOpenedYet",
      "msg": "The game is not opened yet"
    },
    {
      "code": 6025,
      "name": "GameAlreadyClosed",
      "msg": "The game is already closed"
    },
    {
      "code": 6026,
      "name": "AlreadySettled",
      "msg": "The game is already settled"
    },
    {
      "code": 6027,
      "name": "AlreadyVoided",
      "msg": "The game is already voided"
    },
    {
      "code": 6028,
      "name": "ResultDoesNotExist",
      "msg": "Result does not exist"
    },
    {
      "code": 6029,
      "name": "CannotModifyResult",
      "msg": "Cannot modify the game outcome because some users already have claimed their payments"
    },
    {
      "code": 6030,
      "name": "GameIsNotVoided",
      "msg": "Only voided games can be refunded"
    },
    {
      "code": 6031,
      "name": "GameIsNotSettled",
      "msg": "Payments can only be claimed when the game is settled"
    },
    {
      "code": 6032,
      "name": "AlreadyPaid",
      "msg": "The bet was already paid"
    },
    {
      "code": 6033,
      "name": "BetOutOfRange",
      "msg": "Bet ID was out of range"
    },
    {
      "code": 6034,
      "name": "BetDoesNotExist",
      "msg": "The bet provided doesn't match an existing bet"
    },
    {
      "code": 6035,
      "name": "NotAWinner",
      "msg": "Only winner bets can claim the prize"
    },
    {
      "code": 6036,
      "name": "InsufficientFundsForTransaction",
      "msg": "Insufficient funds for transaction"
    },
    {
      "code": 6037,
      "name": "MaxBetsLimit",
      "msg": "Cannot place more than 10 bets per game with the same wallet"
    },
    {
      "code": 6038,
      "name": "InvalidMinStake",
      "msg": "Minimum Stake must be greater than 0"
    },
    {
      "code": 6039,
      "name": "InvalidMinStep",
      "msg": "Minimum must be greater or equal than Minimum stake"
    },
    {
      "code": 6040,
      "name": "InvalidDomain",
      "msg": "The domain provided is invalid (32 char max)"
    },
    {
      "code": 6041,
      "name": "Unauthorized",
      "msg": "Only authorized wallets can peform this operation"
    },
    {
      "code": 6042,
      "name": "MaxStakeButtons",
      "msg": "Cannot create more than 10 stake buttons"
    },
    {
      "code": 6043,
      "name": "InvalidMinStakeButton",
      "msg": "The stake button amount cannot be smaller than the minimum allowed stake"
    },
    {
      "code": 6044,
      "name": "InvalidStepStakeButton",
      "msg": "The stake button amount should be divisible by the min-step amount"
    }
  ]
};

export const IDL: CubistGames = {
  "version": "0.1.2",
  "name": "cubist_games",
  "instructions": [
    {
      "name": "initializeSystemConfig",
      "accounts": [
        {
          "name": "systemAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "systemConfigData",
          "type": {
            "defined": "SystemConfigData"
          }
        }
      ]
    },
    {
      "name": "updateSystemConfig",
      "accounts": [
        {
          "name": "systemAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "systemConfigData",
          "type": {
            "defined": "SystemConfigData"
          }
        }
      ]
    },
    {
      "name": "initializeConfig",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stats",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "configData",
          "type": {
            "defined": "ConfigData"
          }
        }
      ]
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "configData",
          "type": {
            "defined": "ConfigData"
          }
        }
      ]
    },
    {
      "name": "createTerms",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "terms",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "arweaveHash",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateTerms",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "terms",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "arweaveHash",
          "type": "string"
        }
      ]
    },
    {
      "name": "createGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stats",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "gameData",
          "type": {
            "defined": "GameData"
          }
        }
      ]
    },
    {
      "name": "updateGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "gameData",
          "type": {
            "defined": "GameData"
          }
        }
      ]
    },
    {
      "name": "initializePlayerBets",
      "accounts": [
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "playerBets",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "placeSolBet",
      "accounts": [
        {
          "name": "player",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerBets",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "optionId",
          "type": "u8"
        },
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "toggleGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "activate",
          "type": "bool"
        }
      ]
    },
    {
      "name": "settleGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "optionId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "voidGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimSolBet",
      "accounts": [
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerBets",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "betKey",
          "type": "u8"
        },
        {
          "name": "optionId",
          "type": "u8"
        },
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "refundSolBet",
      "accounts": [
        {
          "name": "player",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerBets",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "betKey",
          "type": "u8"
        },
        {
          "name": "optionId",
          "type": "u8"
        },
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "collectSolProfits",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "playerBets",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "bets",
            "type": {
              "vec": {
                "defined": "Bet"
              }
            }
          }
        ]
      }
    },
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "https",
            "type": "bool"
          },
          {
            "name": "domain",
            "type": "string"
          },
          {
            "name": "useCategories",
            "type": "bool"
          },
          {
            "name": "allowReferral",
            "type": "bool"
          },
          {
            "name": "fireThreshold",
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "minStep",
            "type": "u64"
          },
          {
            "name": "stakeButtons",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "customStakeButton",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "showPot",
            "type": "bool"
          },
          {
            "name": "designTemplatesHash",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "profitSharing",
            "type": {
              "vec": {
                "defined": "TreasuryShare"
              }
            }
          },
          {
            "name": "terms",
            "type": {
              "vec": {
                "defined": "TermsPDA"
              }
            }
          },
          {
            "name": "categoriesHash",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "state",
            "type": {
              "defined": "GameState"
            }
          },
          {
            "name": "openTime",
            "type": "i64"
          },
          {
            "name": "closeTime",
            "type": "i64"
          },
          {
            "name": "settleTime",
            "type": "i64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "settledAt",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "cashedAt",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "solProfits",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "tokenProfits",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "useToken",
            "type": "bool"
          },
          {
            "name": "allowReferral",
            "type": "bool"
          },
          {
            "name": "fireThreshold",
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "minStep",
            "type": "u64"
          },
          {
            "name": "stakeButtons",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "customStakeButton",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "showPot",
            "type": "bool"
          },
          {
            "name": "designTemplate",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "profitSharing",
            "type": {
              "vec": {
                "defined": "TreasuryShare"
              }
            }
          },
          {
            "name": "termsId",
            "type": "string"
          },
          {
            "name": "termsHash",
            "type": "string"
          },
          {
            "name": "definitionHash",
            "type": "string"
          },
          {
            "name": "image1Hash",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "hasBets",
            "type": "bool"
          },
          {
            "name": "options",
            "type": {
              "vec": {
                "defined": "GameOption"
              }
            }
          },
          {
            "name": "totalBetsClaimed",
            "type": "u32"
          },
          {
            "name": "result",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "category",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "stats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "totalGames",
            "type": "u64"
          },
          {
            "name": "totalSolProfits",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "systemConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "gameFee",
            "type": "u64"
          },
          {
            "name": "betFee",
            "type": "u64"
          },
          {
            "name": "profitFee",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "terms",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "arweaveHash",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Bet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "optionId",
            "type": "u8"
          },
          {
            "name": "stake",
            "type": "u64"
          },
          {
            "name": "optionStakes",
            "type": "u64"
          },
          {
            "name": "paid",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "TermsPDA",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "TreasuryShare",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "share",
            "type": "u16"
          },
          {
            "name": "cashed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "ConfigData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "https",
            "type": "bool"
          },
          {
            "name": "domain",
            "type": "string"
          },
          {
            "name": "useCategories",
            "type": "bool"
          },
          {
            "name": "allowReferral",
            "type": "bool"
          },
          {
            "name": "fireThreshold",
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "minStep",
            "type": "u64"
          },
          {
            "name": "stakeButtons",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "customStakeButton",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "showPot",
            "type": "bool"
          },
          {
            "name": "designTemplatesHash",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "profitSharing",
            "type": {
              "vec": {
                "defined": "TreasuryShare"
              }
            }
          },
          {
            "name": "terms",
            "type": {
              "vec": {
                "defined": "TermsPDA"
              }
            }
          },
          {
            "name": "categoriesHash",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "GameData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openTime",
            "type": "i64"
          },
          {
            "name": "closeTime",
            "type": "i64"
          },
          {
            "name": "settleTime",
            "type": "i64"
          },
          {
            "name": "allowReferral",
            "type": "bool"
          },
          {
            "name": "fireThreshold",
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "minStep",
            "type": "u64"
          },
          {
            "name": "stakeButtons",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "customStakeButton",
            "type": "bool"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "showPot",
            "type": "bool"
          },
          {
            "name": "designTemplate",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "profitSharing",
            "type": {
              "vec": {
                "defined": "TreasuryShare"
              }
            }
          },
          {
            "name": "termsId",
            "type": "string"
          },
          {
            "name": "termsHash",
            "type": "string"
          },
          {
            "name": "definitionHash",
            "type": "string"
          },
          {
            "name": "image1Hash",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "category",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "options",
            "type": {
              "vec": {
                "defined": "GameOption"
              }
            }
          }
        ]
      }
    },
    {
      "name": "GameOption",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "totalStake",
            "type": "u64"
          },
          {
            "name": "totalBets",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "SystemConfigData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "gameFee",
            "type": "u64"
          },
          {
            "name": "betFee",
            "type": "u64"
          },
          {
            "name": "profitFee",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "GameState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Pending"
          },
          {
            "name": "Open"
          },
          {
            "name": "Closed"
          },
          {
            "name": "Voided"
          },
          {
            "name": "Settled"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidFee",
      "msg": "Fee must be between 100 and 10000 (1% to 100.00%)"
    },
    {
      "code": 6001,
      "name": "FeeTooSmall",
      "msg": "The game fee cannot be smaller than the system fee (unless game fee is 0)"
    },
    {
      "code": 6002,
      "name": "ProfitSharingLimit",
      "msg": "ProfitSharing cannot have more than 10 entries"
    },
    {
      "code": 6003,
      "name": "InvalidProfitSharing",
      "msg": "Total profit sharing must be equal to 10000 (100.00%)"
    },
    {
      "code": 6004,
      "name": "DuplicatedProfitSharing",
      "msg": "Profit sharing cannot have duplicated PublicKeys"
    },
    {
      "code": 6005,
      "name": "ProgramTreasuryMissing",
      "msg": "The program treasury must be within the ProfitTreasuries array"
    },
    {
      "code": 6006,
      "name": "TreasuryShareNotFound",
      "msg": "Treasury share public key does not exist"
    },
    {
      "code": 6007,
      "name": "InvalidTreasuryShare",
      "msg": "The program treasury share must be bigger"
    },
    {
      "code": 6008,
      "name": "ShareAlreadyCashed",
      "msg": "The treasury share is already cashed"
    },
    {
      "code": 6009,
      "name": "TermsAlreadyExists",
      "msg": "The terms and conditions already exists"
    },
    {
      "code": 6010,
      "name": "InvalidDesignTemplates",
      "msg": "Design templates must be an array of strings, and each string must have between 1 and 2 alphanumeric characters"
    },
    {
      "code": 6011,
      "name": "InvalidID",
      "msg": "ID must contain between 1 and 4 alphanumeric characters"
    },
    {
      "code": 6012,
      "name": "TermsNotFound",
      "msg": "The selected terms & conditions does not exist"
    },
    {
      "code": 6013,
      "name": "InvalidArweaveHash",
      "msg": "The Arweave hash must be a string of 43 characters"
    },
    {
      "code": 6014,
      "name": "InvalidDesignTemplate",
      "msg": "The selected design template does not exist"
    },
    {
      "code": 6015,
      "name": "InvalidCloseTime",
      "msg": "Close time must be greater than open time"
    },
    {
      "code": 6016,
      "name": "InvalidSettleTime",
      "msg": "Settle time must be greater than close time"
    },
    {
      "code": 6017,
      "name": "EmptyOptions",
      "msg": "At least one game option must be defined"
    },
    {
      "code": 6018,
      "name": "TooManyGameOptions",
      "msg": "Too many game options! Maximum number of options is limited to 20"
    },
    {
      "code": 6019,
      "name": "InvalidOptionOrder",
      "msg": "Options should be arranged in ascending order starting by id=0"
    },
    {
      "code": 6020,
      "name": "AlreadyStarted",
      "msg": "Cannot modify already started games (games with bets)"
    },
    {
      "code": 6021,
      "name": "InvalidOptionInitialStake",
      "msg": "Options initial stake must be 0"
    },
    {
      "code": 6022,
      "name": "InvalidOptionTotalBets",
      "msg": "Options initial total bets must be 0"
    },
    {
      "code": 6023,
      "name": "GameDisabled",
      "msg": "The game is disabled and cannot accept bets or be settled"
    },
    {
      "code": 6024,
      "name": "GameNotOpenedYet",
      "msg": "The game is not opened yet"
    },
    {
      "code": 6025,
      "name": "GameAlreadyClosed",
      "msg": "The game is already closed"
    },
    {
      "code": 6026,
      "name": "AlreadySettled",
      "msg": "The game is already settled"
    },
    {
      "code": 6027,
      "name": "AlreadyVoided",
      "msg": "The game is already voided"
    },
    {
      "code": 6028,
      "name": "ResultDoesNotExist",
      "msg": "Result does not exist"
    },
    {
      "code": 6029,
      "name": "CannotModifyResult",
      "msg": "Cannot modify the game outcome because some users already have claimed their payments"
    },
    {
      "code": 6030,
      "name": "GameIsNotVoided",
      "msg": "Only voided games can be refunded"
    },
    {
      "code": 6031,
      "name": "GameIsNotSettled",
      "msg": "Payments can only be claimed when the game is settled"
    },
    {
      "code": 6032,
      "name": "AlreadyPaid",
      "msg": "The bet was already paid"
    },
    {
      "code": 6033,
      "name": "BetOutOfRange",
      "msg": "Bet ID was out of range"
    },
    {
      "code": 6034,
      "name": "BetDoesNotExist",
      "msg": "The bet provided doesn't match an existing bet"
    },
    {
      "code": 6035,
      "name": "NotAWinner",
      "msg": "Only winner bets can claim the prize"
    },
    {
      "code": 6036,
      "name": "InsufficientFundsForTransaction",
      "msg": "Insufficient funds for transaction"
    },
    {
      "code": 6037,
      "name": "MaxBetsLimit",
      "msg": "Cannot place more than 10 bets per game with the same wallet"
    },
    {
      "code": 6038,
      "name": "InvalidMinStake",
      "msg": "Minimum Stake must be greater than 0"
    },
    {
      "code": 6039,
      "name": "InvalidMinStep",
      "msg": "Minimum must be greater or equal than Minimum stake"
    },
    {
      "code": 6040,
      "name": "InvalidDomain",
      "msg": "The domain provided is invalid (32 char max)"
    },
    {
      "code": 6041,
      "name": "Unauthorized",
      "msg": "Only authorized wallets can peform this operation"
    },
    {
      "code": 6042,
      "name": "MaxStakeButtons",
      "msg": "Cannot create more than 10 stake buttons"
    },
    {
      "code": 6043,
      "name": "InvalidMinStakeButton",
      "msg": "The stake button amount cannot be smaller than the minimum allowed stake"
    },
    {
      "code": 6044,
      "name": "InvalidStepStakeButton",
      "msg": "The stake button amount should be divisible by the min-step amount"
    }
  ]
};
