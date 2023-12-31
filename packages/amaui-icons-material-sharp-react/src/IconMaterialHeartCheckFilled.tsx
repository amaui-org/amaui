import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartCheckFilled'

      short_name='HeartCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120 313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 21.5t81 61.5q34-40 81-61.5t99-21.5q85 0 142.5 51.5T834-668q-20-8-42-10t-45-2q-85 0-156 68.5T520-440q0 48 21 97.5t59 80.5q-19 17-49.5 43.5T498-172l-58 52Zm278-193L604-426l57-56 57 56 141-141 57 56-198 198Z"/>
    </Icon>
  );
});

IconMaterialHeartCheckFilled.displayName = 'AmauiIconMaterialHeartCheckFilled';

export default IconMaterialHeartCheckFilled;
