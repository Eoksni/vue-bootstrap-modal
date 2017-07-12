<template>
    <modal @ok="ok" @cancel="cancel" :show.sync="show">
        Are you sure?
    </modal>
</template>

<script src="./confirm.js"></script>
