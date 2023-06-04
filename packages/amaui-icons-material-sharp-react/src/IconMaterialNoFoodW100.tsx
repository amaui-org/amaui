import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodW100'

      short_name='NoFood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.975 22.3.925 3.25l.5-.5 19.05 19.05Zm-.05-3.85-.625-.625L20.375 7.5h-8.85l-.1-.7h4.5v-4h.7v4h4.5Zm-4.3-4.325ZM2.875 18.6v-.7h12.7v.7Zm0 3.1V21h12.7v.7Zm7.675-9.825v.7q-.325-.05-.65-.063-.325-.012-.675-.012-2.325 0-3.712.688-1.388.687-1.763 1.612h9.725l.7.7h-11.3q0-1.35 1.625-2.525Q6.125 11.8 9.225 11.8q.35 0 .675.012.325.013.65.063ZM9.225 14.8Z"/>
    </Icon>
  );
});

IconMaterialNoFoodW100.displayName = 'AmauiIconMaterialNoFoodW100';

export default IconMaterialNoFoodW100;
