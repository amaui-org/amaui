import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirPurifierW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierW100Filled'

      short_name='AirPurifier'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-508q0-44.55 31.725-76.275Q235.45-788 280-788h280q44.55 0 76.275 31.725Q668-724.55 668-680v40h-28v360h28v108H172Zm248-200q44.55 0 76.275-31.725Q528-435.45 528-480q0-44.55-31.725-76.275Q464.55-588 420-588q-44.55 0-76.275 31.725Q312-524.55 312-480q0 44.55 31.725 76.275Q375.45-372 420-372Zm0-28q-33 0-56.5-23.5T340-480q0-33 23.5-56.5T420-560q33 0 56.5 23.5T500-480q0 33-23.5 56.5T420-400Zm234-106v-28h10q17.217 0 30.609-7.5Q708-549 716-566q11-23 31.265-35.5Q767.529-614 792-614h10v28h-10q-17.217 0-30.609 7.5Q748-571 740-554q-11 23-31.265 35.5Q688.471-506 664-506h-10Zm0 160v-28h10q17.217 0 30.609-7.5Q708-389 716-406q11-21 31.265-34.5Q767.529-454 792-454h10v28h-10q-17.217 0-30.609 7.5Q748-411 740-394q-11 23-31.265 35.5Q688.471-346 664-346h-10Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierW100Filled.displayName = 'AmauiIconMaterialAirPurifierW100Filled';

export default IconMaterialAirPurifierW100Filled;
