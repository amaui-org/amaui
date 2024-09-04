import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieOffW100'

      short_name='MovieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-25 18-42.5t43-17.5h9l136 136H160v340q0 14 9 23t23 9h518l28 28H192Zm608-29v-371H451L315-748h54l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h100l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h59q26 0 43 17t17 43v396q0 17-7.5 30T800-241Zm-12 119L122-788q-4-4-4.5-9.5T122-808q5-5 10-5t10 5l666 666q4 4 4.5 9.5T808-122q-5 5-10 5t-10-5ZM484-426Zm142-1Z"/>
    </Icon>
  );
});

IconMaterialMovieOffW100.displayName = 'AmauiIconMaterialMovieOffW100';

export default IconMaterialMovieOffW100;
