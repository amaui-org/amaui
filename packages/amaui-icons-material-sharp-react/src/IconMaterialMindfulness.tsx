import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMindfulness = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mindfulness'

      short_name='Mindfulness'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 656h80V376h-80v280Zm120-60h80V416h-80v180Zm-240-20h80V416h-80v160Zm-80 400V804q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l65 255H760v200H600v80h-80V816h160V616h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"/>
    </Icon>
  );
});

IconMaterialMindfulness.displayName = 'AmauiIconMaterialMindfulness';

export default IconMaterialMindfulness;
