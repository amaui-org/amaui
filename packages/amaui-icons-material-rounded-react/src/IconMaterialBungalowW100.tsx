import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBungalowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowW100'

      short_name='Bungalow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 19.7q-.325 0-.538-.213-.212-.212-.212-.537v-6.225L7.25 14.4q-.075.125-.212.15-.138.025-.263-.05-.125-.075-.15-.213-.025-.137.05-.262l4.675-7.55q.125-.175.288-.262.162-.088.362-.088.2 0 .35.088.15.087.275.262l4.7 7.55q.075.125.038.262-.038.138-.163.213-.125.075-.262.05-.138-.025-.213-.15L15.7 12.75v6.2q0 .325-.212.537-.213.213-.538.213ZM9 19h2.3v-2q0-.275.2-.487.2-.213.5-.213.275 0 .488.213.212.212.212.487v2H15v-7.375L12 6.8l-3 4.8Zm3-5q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487Q12.275 14 12 14Zm-3 5h6-6Z"/>
    </Icon>
  );
});

IconMaterialBungalowW100.displayName = 'AmauiIconMaterialBungalowW100';

export default IconMaterialBungalowW100;
