import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import SandBox from "@/components/SandBox.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe("SandBox.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new sandbox message";
    const wrapper = shallowMount(SandBox, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
