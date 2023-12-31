import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountChildW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountChildW100Filled'

      short_name='AccountChild'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.675-828Q552-828 615.5-800.5 679-773 726-726t74.5 110.379Q828-552.242 828-479.684 828-408 800.5-344.5T726-234q-47 47-110.379 74.5Q552.242-132 479.684-132 408-132 344.642-159.34q-63.359-27.339-110.661-74.641-47.302-47.302-74.641-110.661Q132-408 132-479.684q0-72.558 27.5-135.937Q187-679 234-726q47-47 110.611-74.5Q408.222-828 479.675-828ZM416-640q0 27 18.5 45.5T480-576q27 0 45.5-18.5T544-640q0-27-18.5-45.5T480-704q-27 0-45.5 18.5T416-640Zm64 96q-42.4 0-93.2 20.8Q336-502.4 336-464v128q0 35.962 50.5 60.481T496-256v-64.348q-27.423 1.609-51.711-4.022Q420-330 400-342q3-18 28-30t52-12q27 0 53.5 12t26.5 30v72q34-11 49-29t15-37v-128q0-38.4-50.8-59.2Q522.4-544 480-544Zm-.141 144Q463-400 451.5-411.641t-11.5-28.5Q440-457 451.641-468.5t28.5-11.5Q497-480 508.5-468.359t11.5 28.5Q520-423 508.359-411.5t-28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialAccountChildW100Filled.displayName = 'AmauiIconMaterialAccountChildW100Filled';

export default IconMaterialAccountChildW100Filled;
