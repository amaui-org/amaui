import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPasskeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasskeyW100Filled'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-492q-45 0-76.5-31.5T332-600q0-45 31.5-76.5T440-708q45 0 76.5 31.5T548-600q0 45-31.5 76.5T440-492Zm269 321-6-7q-3-4-5-9t-2-10v-140q-37-8-58.5-33.5T616-430q0-39 27-66.5t67-27.5q38 0 66 28t28 66q0 34-22 59.5T724-337v53l18 18q5 5 5.5 11t-4.5 11l-19 18 20 19q4 4 4.5 9.5T745-187l-13 16q-5 5-11.5 5t-11.5-5Zm-507-41q-13 0-21.5-8.5T172-242v-22q0-22 13.5-41.5T222-336q55-26 109.5-39T440-388q28 0 56.5 3.5T545-375q9 29 27 52t44 38v73H202Zm508-152q27 0 46.5-19.5T776-430q0-27-19.5-46.5T710-496q-28 0-47 19.5T644-430q0 27 19 46.5t47 19.5Z"/>
    </Icon>
  );
});

IconMaterialPasskeyW100Filled.displayName = 'AmauiIconMaterialPasskeyW100Filled';

export default IconMaterialPasskeyW100Filled;
