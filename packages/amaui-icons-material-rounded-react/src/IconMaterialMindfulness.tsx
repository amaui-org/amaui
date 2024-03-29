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
      <path d="M480 376q-17 0-28.5 11.5T440 416v200q0 17 11.5 28.5T480 656q17 0 28.5-11.5T520 616V416q0-17-11.5-28.5T480 376Zm120 40q-17 0-28.5 11.5T560 456v100q0 17 11.5 28.5T600 596q17 0 28.5-11.5T640 556V456q0-17-11.5-28.5T600 416Zm-240 0q-17 0-28.5 11.5T320 456v80q0 17 11.5 28.5T360 576q17 0 28.5-11.5T400 536v-80q0-17-11.5-28.5T360 416ZM240 976V804q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l52 205q5 19-7 34.5T840 696h-80v120q0 33-23.5 56.5T680 896h-80v80h-80V816h160V616h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"/>
    </Icon>
  );
});

IconMaterialMindfulness.displayName = 'AmauiIconMaterialMindfulness';

export default IconMaterialMindfulness;
