import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieFilterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilterFilled'

      short_name='MovieFilter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 11-.95 2.05L6.5 14l2.05.95L9.5 17l.95-2.05L12.5 14l-2.05-.95Zm6 0-.65 1.35-1.35.65 1.35.65.65 1.35.65-1.35L17.5 13l-1.35-.65ZM2 20V4h2l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h5v16Z"/>
    </Icon>
  );
});

IconMaterialMovieFilterFilled.displayName = 'AmauiIconMaterialMovieFilterFilled';

export default IconMaterialMovieFilterFilled;
