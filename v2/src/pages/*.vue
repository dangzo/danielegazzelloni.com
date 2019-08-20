<script lang="ts">
export default {
  asyncData({ redirect }: { redirect: Function }): typeof Function {
    return redirect('/');
  },
};
</script>
