import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotateUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUp'

      short_name='TextRotateUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 20q-.425 0-.712-.288Q17 19.425 17 19V6.8l-.35.35q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7L17.3 3.7q.15-.15.337-.225.188-.075.388-.075t.388.075q.187.075.337.225l2.025 2.025q.3.3.3.7 0 .4-.3.7-.3.3-.7.287-.4-.012-.725-.287L19 6.8V19q0 .425-.288.712Q18.425 20 18 20Zm-5.225-3.35-8.85-3.3q-.375-.15-.65-.538Q3 12.425 3 12q0-.425.275-.812.275-.388.65-.538l8.85-3.3q.5-.2.862.062.363.263.363.813 0 .25-.162.475-.163.225-.388.3l-2.25.75v4.45l2.25.8q.225.075.388.3.162.225.162.5 0 .55-.363.8-.362.25-.862.05Zm-3.175-3v-3.3l-4.55 1.6v.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUp.displayName = 'AmauiIconMaterialTextRotateUp';

export default IconMaterialTextRotateUp;
