import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadsetOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOffW100Filled'

      short_name='HeadsetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 17.05-3.275-3.25q.225-.325.537-.513.313-.187.738-.187h1.3V11q0-2.9-2.05-4.95Q15 4 12.1 4q-1.1 0-2.162.35-1.063.35-1.888.95l-.5-.5q.75-.6 1.95-1.05 1.2-.45 2.6-.45 1.6 0 3 .6t2.45 1.65Q18.6 6.6 19.2 8q.6 1.4.6 3Zm-7.35 3.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.85q.15 0 .3-.05t.275-.175L17.6 18.7h.2q-.625 0-1.062-.438-.438-.437-.438-1.062v.2L6.15 7.25Q5.7 8 5.4 9.012 5.1 10.025 5.1 11v2.1h1.3q.625 0 1.063.437.437.438.437 1.063v2.6q0 .625-.437 1.062-.438.438-1.063.438h-.5q-.65 0-1.075-.425Q4.4 17.85 4.4 17.2V11q0-1.2.338-2.275.337-1.075.912-1.975l-3.8-3.8q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l19.3 19.3q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-1.8-1.8q-.2.225-.487.338-.288.112-.563.112Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOffW100Filled.displayName = 'AmauiIconMaterialHeadsetOffW100Filled';

export default IconMaterialHeadsetOffW100Filled;
