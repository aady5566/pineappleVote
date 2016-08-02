enablePlugins(ScalaJSPlugin)

name := "pineappleVote"

version := "1.0"

scalaVersion := "2.11.8"



libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.9.0" //%%% means not a normal Scala library

//jqueryVersion
libraryDependencies += "be.doeraene" %%% "scalajs-jquery" % "0.9.0"

skip in packageJSDependencies := false
jsDependencies +=
  "org.webjars" % "jquery" % "2.1.4" / "2.1.4/jquery.js"

jsDependencies += RuntimeDOM
