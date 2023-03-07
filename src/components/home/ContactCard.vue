<template>
    <div class="presentation_background">

        <div class="presentation_card">

            <div class="card_picture">
                <img style="height: 100%; width: 100%; object-fit: contain;" src="/assets/profile_circle.jpg">
            </div>


            <div class="card_text">
                <h2>Sebastian</h2>
                <h4>Casillas Perez</h4>

                <div class="contact_buttons">
                    <q-btn @click='to_clipboard' flat dense size="12px" icon="email"  label="sebastian.casillas@outlook.com" />
                    <q-btn @click="open_link('https://linkedin.com/in/sebastian-casillas')" flat dense size="12px"  icon="mdi-linkedin"  label="linkedin.com/in/sebastian-casillas" />
                    <q-btn @click="open_link('https://github.com/Bastian-Kass')" flat dense size="12px"  icon="mdi-github" label="github.com/Bastian-Kass" />
                    <!-- <q-btn @click="open_link('https://www.hackerrank.com/bastian_kass')" flat dense size="12px"  icon="mdi-code-greater-than-or-equal" label="hackerrank.com/bastian_kass" /> -->
                </div>

            </div>
        </div>

        <div class="card_motto">
            <p class="text-italic text-center q-my-sm"> A good computer system implementation involves much more than just code</p>  
        </div>

    </div>

</template>

<script>
import { copyToClipboard } from 'quasar'

export default {
    name: 'ContactCard',
    methods: {
      open_link(webpage){
        window.open(webpage, '_blank');
      },
      to_clipboard(){
        copyToClipboard('sebastian.casillas@outlook.com')
            .then(() => {
              console.log('Copy success')
            })
            .catch(() => {
              console.log('Copy fail')
            })
      }
    }
}

</script>

<style lang="scss">


    .presentation_background{
      box-shadow: 0px 48px 317px 59px rgba(122, 75, 75, 0.05);
      -webkit-box-shadow: 0px 48px 317px 59px rgba(255,255,255,0.05);
      -moz-box-shadow: 0px 48px 317px 59px rgba(255,255,255,0.05);

      margin-bottom: 4rem;
      margin-top: 4rem;
    }




    .presentation_card{
        background-color: white; 
        vertical-align: middle;

        height: 340px; 
        width: 680px;

        padding: 30px 50px;

        box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);
        -webkit-box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);
        -moz-box-shadow: 16px 24px 50px -11px rgba(0,0,0,0.76);

        .card_picture{
            display: inline-block;
            
            width: 250px; 
            height: 250px;
        }

        .card_text{
            display: inline-block;
            width: 300px;
            padding: 0 .5rem;
            margin-left: 24px;
            margin-top: 10px;

                h2{
                    margin-top: 0rem;
                    margin-bottom: .5rem;
                } 
            
                h4{
                    margin-top: .5rem;
                    margin-bottom: 1.2rem;
                }

                .contact_buttons{
                    margin-top: 20px;
                    width: 300px;
                }

            .contact_buttons > button{

                width: 100%;
                display: block;
                margin-top: 6px;
                
                span.q-btn__content{
                    padding: 2px 4px;
                    width: 100%;
                    justify-content: start;
                }
            }
        }

    }






    @media (max-width: 700px){
        .presentation_card{
            height: 100%; 
            width: 100%;

            .card_picture{
                margin: auto;
                display:block;
            }

            .card_text{
                padding-top:20px;
                display:block;
                margin: auto;
                text-align: center;
            }
        }

        .card_motto{
            margin: 0 20px;
            width: 95%;
            text-align: center;
        }


    }

</style>