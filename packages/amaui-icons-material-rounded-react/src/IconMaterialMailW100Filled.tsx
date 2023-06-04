import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailW100Filled'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-7q.125 0 .225-.038.1-.037.2-.087L19.7 6.75q.125-.075.15-.213.025-.137-.05-.262-.05-.1-.2-.138-.15-.037-.275.038L12 11 4.675 6.175q-.125-.075-.263-.063-.137.013-.212.138-.075.125-.05.275.025.15.15.225l7.275 4.825q.1.05.2.087.1.038.225.038Z"/>
    </Icon>
  );
});

IconMaterialMailW100Filled.displayName = 'AmauiIconMaterialMailW100Filled';

export default IconMaterialMailW100Filled;
