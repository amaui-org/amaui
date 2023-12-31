import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialActionKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ActionKeyFilled'

      short_name='ActionKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-140q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-6 43.5T797-218l95 94q6 5 9 12.5t3 15.5q0 8-3 15t-9 13q-5 5-12.5 8T864-57q-8 0-15-3t-13-8l-95-94q-18 11-38.5 16.5T660-140Zm-440 0q-66 0-113-47T60-300q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm440-80q33 0 56.5-23.5T740-300q0-33-23.5-56.5T660-380q-33 0-56.5 23.5T580-300q0 33 23.5 56.5T660-220ZM220-580q-66 0-113-47T60-740q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm440 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialActionKeyFilled.displayName = 'AmauiIconMaterialActionKeyFilled';

export default IconMaterialActionKeyFilled;
