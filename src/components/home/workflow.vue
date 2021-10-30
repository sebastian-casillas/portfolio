<template>
    <div id="workflow_div">

<!-- 
        <h5 id="24601">Who am I?</h5>
        <h1></h1> -->

        <h2>Workflow</h2>

        <div class="workflow_grid">
            <div class="medium_item">
                <h5>Geeky developer looking for his next challenging project</h5>
                <p>
                    Eager to take projects from ideation to delivery, and ready to ensure viability through all its dimensions.
                     </p>
            </div>
            <div class="medium_item small_grid">
                <div>Hello</div>
                <div>World</div>
                <div>Sebastian</div>
                <div>Casillas</div>
            </div>
            <div class="large_item">
                <h5>Geeky developer looking for his next challenging project</h5>
                <p>
                    Eager to take projects from ideation to delivery, and ready to ensure viability through all its dimensions.
                        </p>
            </div>
            <div class="medium_item">
                <h5>Geeky developer looking for his next challenging project</h5>
                <p>
                    Eager to take projects from ideation to delivery, and ready to ensure viability through all its dimensions.
                     </p>
            </div>
            <div class="medium_item">
                <h5>Geeky developer looking for his next challenging project</h5>
                <p>
                    Eager to take projects from ideation to delivery, and ready to ensure viability through all its dimensions.
                     </p>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Workflow',
    methods: {

    }
}
</script>


<style lang="scss" scoped>
#workflow_div{
    margin-top:100px;
    padding: 1em 3em;
    min-height: 400px;
    width: 100%;

    & > .workflow_grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        row-gap: 4rem;

        & > .medium_item{

            @media screen and (max-width: 651px){
                grid-column: 1 / span 2;
            }

            
        }

        & > .large_item{
            grid-column: 1 / span 2;
        }

    }


}

.small_grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
}



</style>