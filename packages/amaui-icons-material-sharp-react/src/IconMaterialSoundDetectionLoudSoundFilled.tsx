import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundDetectionLoudSoundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionLoudSoundFilled'

      short_name='SoundDetectionLoudSound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.725 17.625H12.05L9.225 20.45q-.575.575-1.413.575-.837 0-1.412-.575l-2.825-2.825Q3 17.05 3 16.2q0-.85.575-1.425l2.8-2.8V6.3Zm-10.5-13.25q2.675-1.7 5.787-1.363 3.113.338 5.363 2.588 2.25 2.25 2.587 5.362.338 3.113-1.362 5.788l-1.45-1.45q1.125-2.05.788-4.338-.338-2.287-1.988-3.937t-3.937-1.988q-2.288-.337-4.338.788Zm2.95 2.95Q11.6 6.9 13.05 7.15t2.5 1.3q1.05 1.05 1.287 2.488.238 1.437-.187 2.862l-1.7-1.7q0-.625-.187-1.213-.188-.587-.613-1.012-.45-.45-1.037-.65-.588-.2-1.238-.2Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionLoudSoundFilled.displayName = 'AmauiIconMaterialSoundDetectionLoudSoundFilled';

export default IconMaterialSoundDetectionLoudSoundFilled;
