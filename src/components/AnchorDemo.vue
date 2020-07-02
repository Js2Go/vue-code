<template>
  <div class="about">
    <Anchor container=".show" show-ink affix style="position: fixed; right: 20px; top: 100px; width: 200px;">
      <AnchorLink href="#a" title="Basic Usage" />
      <AnchorLink href="#b" title="Static Position" />
      <AnchorLink href="#c" title="API">
        <AnchorLink href="#c1" title="Anchor props" />
        <AnchorLink href="#c2" title="Anchor events" />
        <AnchorLink href="#c3" title="AnchorLink props" />
      </AnchorLink>
    </Anchor>
    <div class="show" style="height: calc(100vh - 82px); overflow: scroll;">
      <div id="a" style="height:30rem;">12312312312</div>
      <div id="b" style="height:30rem;">123123123123</div>
      <div id="c" style="height:30rem;">
        <div id="c1" style="height:30rem;">123123123123</div>
        <div id="c2" style="height:30rem;">123123123123</div>
        <div id="c3" style="height:30rem;">123123123123</div>
      </div>
    </div>
  </div>
</template>
