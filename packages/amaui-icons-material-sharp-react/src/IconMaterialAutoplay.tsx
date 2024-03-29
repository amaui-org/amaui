import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoplay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Autoplay'

      short_name='Autoplay'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M380 756V396l280 180-280 180Zm100 260q-108 0-202.5-49.5T120 828v108H40V696h240v80h-98q51 75 129.5 117.5T480 936q115 0 208.5-66T820 695l78 18q-45 136-160 219.5T480 1016ZM42 536q7-67 32-128.5T143 294l57 57q-32 41-52 87.5T123 536H42Zm214-241-57-57q53-44 114-69.5T440 138v80q-51 5-97 25t-87 52Zm449 0q-41-32-87.5-52T520 218v-80q67 6 128.5 31T762 238l-57 57Zm133 241q-5-51-25-97.5T761 351l57-57q44 52 69 113.5T918 536h-80Z"/>
    </Icon>
  );
});

IconMaterialAutoplay.displayName = 'AmauiIconMaterialAutoplay';

export default IconMaterialAutoplay;
