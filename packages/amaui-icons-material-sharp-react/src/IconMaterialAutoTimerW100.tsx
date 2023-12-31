import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoTimerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTimerW100'

      short_name='AutoTimer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-576-42.16 93.84L344-440l93.84 42.16L480-304l42.16-93.84L616-440l-93.84-42.16L480-576ZM380-866v-28h200v28H380Zm100 734q-63.532 0-119.766-24Q304-180 262-222q-42-42-66-98.234Q172-376.468 172-440q0-63.532 24-119.766Q220-616 262-658q42-42 98.234-66Q416.468-748 480-748q57 0 110.5 21t97.5 59l40-40 20 20-40 40q38 44 59 97.5T788-440q0 63.532-24 119.766Q740-264 698-222q-42 42-98.234 66Q543.532-132 480-132Zm0-28q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialAutoTimerW100.displayName = 'AmauiIconMaterialAutoTimerW100';

export default IconMaterialAutoTimerW100;
