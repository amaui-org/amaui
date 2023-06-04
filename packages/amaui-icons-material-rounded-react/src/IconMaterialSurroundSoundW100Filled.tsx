import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurroundSoundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSoundW100Filled'

      short_name='SurroundSound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.1q.875 0 1.488-.612.612-.613.612-1.488t-.612-1.488Q12.875 9.9 12 9.9t-1.488.612Q9.9 11.125 9.9 12t.612 1.488q.613.612 1.488.612Zm5.15 1.575q.575-.8.863-1.737Q18.3 13 18.3 12t-.287-1.938q-.288-.937-.863-1.737-.1-.125-.25-.15-.15-.025-.275.1-.1.1-.112.225-.013.125.062.25.5.725.762 1.55.263.825.263 1.7t-.263 1.7q-.262.825-.762 1.55-.075.125-.062.25.012.125.112.225.125.125.275.1.15-.025.25-.15Zm-9.775.05q.1-.1.113-.225.012-.125-.063-.25-.5-.725-.762-1.55Q6.4 12.875 6.4 12t.263-1.7q.262-.825.762-1.55.075-.125.063-.25-.013-.125-.113-.225-.125-.125-.275-.1-.15.025-.25.15-.575.8-.862 1.737Q5.7 11 5.7 12t.288 1.938q.287.937.862 1.737.1.125.25.15.15.025.275-.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSurroundSoundW100Filled.displayName = 'AmauiIconMaterialSurroundSoundW100Filled';

export default IconMaterialSurroundSoundW100Filled;
