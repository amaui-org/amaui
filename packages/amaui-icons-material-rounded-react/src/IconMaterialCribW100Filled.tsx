import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCribW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribW100Filled'

      short_name='Crib'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.9q.7 0 1.35-.1.65-.1 1.3-.3v-3.8h-5.3v3.8q.65.2 1.3.3.65.1 1.35.1Zm0 .7q-1.6 0-3.087-.538-1.488-.537-2.738-1.512-.125-.1-.137-.25-.013-.15.112-.275.1-.1.225-.1T6.6 17q.475.375.988.688.512.312 1.062.537V14.7H6.8q-.65 0-1.075-.425Q5.3 13.85 5.3 13.2V8q0-1.125.788-1.912Q6.875 5.3 8 5.3h1.45q.625 0 1.063.438.437.437.437 1.062v3h6.25q.65 0 1.075.425.425.425.425 1.075v1.9q0 .65-.425 1.075-.425.425-1.075.425h-1.85v3.525q.55-.225 1.063-.537.512-.313.987-.688.1-.075.225-.075t.225.1q.125.125.112.275-.012.15-.137.25-1.25.975-2.737 1.512Q13.6 19.6 12 19.6Z"/>
    </Icon>
  );
});

IconMaterialCribW100Filled.displayName = 'AmauiIconMaterialCribW100Filled';

export default IconMaterialCribW100Filled;
