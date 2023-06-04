import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrafficFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrafficFilled'

      short_name='Traffic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q12.65 15 12 15q-.65 0-1.075.425-.425.425-.425 1.075 0 .65.425 1.075Q11.35 18 12 18Zm0-4.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q12.65 10.5 12 10.5q-.65 0-1.075.425Q10.5 11.35 10.5 12q0 .65.425 1.075.425.425 1.075.425ZM12 9q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q12.65 6 12 6q-.65 0-1.075.425Q10.5 6.85 10.5 7.5q0 .65.425 1.075Q11.35 9 12 9ZM7 21v-2.15q-1.275-.35-2.137-1.4Q4 16.4 4 15h3v-1.15q-1.275-.35-2.137-1.4Q4 11.4 4 10h3V8.85q-1.275-.35-2.137-1.4Q4 6.4 4 5h3V3h10v2h3q0 1.4-.862 2.45Q18.275 8.5 17 8.85V10h3q0 1.4-.862 2.45-.863 1.05-2.138 1.4V15h3q0 1.4-.862 2.45-.863 1.05-2.138 1.4V21Z"/>
    </Icon>
  );
});

IconMaterialTrafficFilled.displayName = 'AmauiIconMaterialTrafficFilled';

export default IconMaterialTrafficFilled;
