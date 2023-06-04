import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesignServicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesignServicesW100Filled'

      short_name='DesignServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.125 19.85v-2.825l4.55-4.55-4.775-4.8q-.1-.1-.162-.237-.063-.138-.063-.263t.063-.263q.062-.137.162-.237L6.175 4.4q.1-.1.238-.163.137-.062.262-.062t.263.062q.137.063.237.163L12 9.2l4.45-4.45q.125-.125.262-.163.138-.037.288-.037.15 0 .275.037.125.038.25.163L19.25 6.5q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L14.825 12l4.8 4.825q.1.1.15.237.05.138.05.263t-.05.25q-.05.125-.15.225l-2.3 2.3q-.1.1-.238.162-.137.063-.262.063t-.263-.063q-.137-.062-.237-.162L11.5 15.3l-4.55 4.55ZM9.175 12 11.5 9.675 9.375 7.55 8.2 8.725l-.5-.5L8.875 7.05l-2.2-2.2L4.35 7.175Zm7.625 7.625 2.325-2.325-2.2-2.2-1.175 1.175-.5-.5 1.175-1.175-2.125-2.125-2.325 2.325ZM4.825 19.15H6.65l9.775-9.775L14.6 7.55l-9.775 9.775Zm12.1-10.25L18.8 7.025 16.975 5.2 15.1 7.075Z"/>
    </Icon>
  );
});

IconMaterialDesignServicesW100Filled.displayName = 'AmauiIconMaterialDesignServicesW100Filled';

export default IconMaterialDesignServicesW100Filled;
