import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieInfo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieInfo'

      short_name='MovieInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm20-80h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm560 0h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm-260-80q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm-300-80h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm560 0h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6ZM180-520h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm560 0h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm-260-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm-300-80h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm560 0h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6ZM360-200h240q17 0 28.5-11.5T640-240v-480q0-17-11.5-28.5T600-760H360q-17 0-28.5 11.5T320-720v480q0 17 11.5 28.5T360-200Zm-40-560h320-320Z"/>
    </Icon>
  );
});

IconMaterialMovieInfo.displayName = 'AmauiIconMaterialMovieInfo';

export default IconMaterialMovieInfo;
