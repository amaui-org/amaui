import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrPlusOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusOffW100'

      short_name='HdrPlusOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-800q-45 0-85.5 11.5T318-756l-20-20q44-26 85-39t97-13q72.21 0 135.72 27.405 63.51 27.405 110.49 74.385 46.98 46.98 74.385 110.49Q828-552.21 828-480q0 47-11.5 92T776-298l-20-20q21-35.779 32.5-76.528Q800-435.276 800-480q0-134-93-227t-227-93Zm-16 190-28-28v-66h28v94Zm72-94h134l14 14v180l-14 14h-92l-42-42v-166Zm28 180h92v-152h-92v152ZM324-324h112v-72H324v72Zm213-213ZM324-216h-28v-208h154l14 14v98l-14 14h-30l36 82h-31l-35-80h-66v80Zm-28-428 28 28v120h-28v-148Zm164 184ZM224-717l19 21q-35 40-59 95t-24 121q0 134 93 227t227 93q68 0 123.5-25t93.5-58l19 20q-48.167 44-109.083 67.5Q546-132 480-132q-72.21 0-135.72-27.405-63.51-27.405-110.49-74.385-46.98-46.98-74.385-110.49Q132-407.79 132-480q0-74 26-133t66-104ZM64-856l20-20L876-84l-20 20L64-856Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusOffW100.displayName = 'AmauiIconMaterialHdrPlusOffW100';

export default IconMaterialHdrPlusOffW100;
