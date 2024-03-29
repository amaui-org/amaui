import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEndocrinology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Endocrinology'

      short_name='Endocrinology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 776q17 0 28.5-11.5T440 736q0-45-21.5-82.5T360 594v142q0 17 11.5 28.5T400 776Zm160 0q17 0 28.5-11.5T600 736V594q-37 22-58.5 59.5T520 736q0 17 11.5 28.5T560 776ZM92 934l-25-76q42-14 67.5-49t25.5-79V312q-24-26-43.5-56T83 192l74-32q42 98 129.5 157T480 376q106 0 193.5-59T803 160l74 32q-14 34-34 64t-43 56v418q0 44 25 79t67 49l-25 76q-66-22-106.5-78T720 730V382q-53 35-113.5 54.5T480 456q-66 0-127-19.5T240 382v348q0 70-41 126T92 934Zm308-78q-50 0-85-35t-35-85V485l54 13q46 11 83.5 38.5T480 602q25-38 62.5-65.5T626 498l54-13v251q0 50-35 85t-85 35q-23 0-43.5-8.5T480 825q-16 14-36.5 22.5T400 856Zm160-120Zm-160 0Z"/>
    </Icon>
  );
});

IconMaterialEndocrinology.displayName = 'AmauiIconMaterialEndocrinology';

export default IconMaterialEndocrinology;
