import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOffW100'

      short_name='FilterAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 20.6-6.9-6.9V18q0 .275-.2.487-.2.213-.5.213-.275 0-.487-.213-.213-.212-.213-.487v-5.7L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-5.725-9.55-.5-.5L16.95 6H8.825l-.7-.7h9.55q.225 0 .338.2.112.2-.038.4Zm-.5-.5Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOffW100.displayName = 'AmauiIconMaterialFilterAltOffW100';

export default IconMaterialFilterAltOffW100;
