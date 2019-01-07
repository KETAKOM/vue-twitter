<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <Header class="col-md-12"></Header>
        <ProfileHeader class="col-md-12">></ProfileHeader>
        <ProfileBar class="col-md-12">></ProfileBar>
        <ProfileCard class="main col-md-3" style="background-color:red"></ProfileCard>
        <TwiiteContent class="main col-md-5" style="background-color:blue"></TwiiteContent>
        <SideBar class="main col-md-3" style="background-color:yellow"></SideBar>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import ProfileHeader from './components/ProfileHeader'
import ProfileBar from './components/ProfileBar'
import ProfileCard from './components/ProfileCard'
import SideBar from './components/SideBar'
import TwiiteContent from './components/TwiiterContent'

export default {
  name: 'App',
  components: {
    Header,
    ProfileHeader,
    ProfileBar,
    ProfileCard,
    SideBar,
    TwiiteContent
  }
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

  .container {
    max-width: 100%;
    padding-right: 0px;
    padding-left: 0px;
  }

  .main {
    margin-top:1%;
    float: left;
  }
</style>