import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplosionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplosionW100Filled'

      short_name='Explosion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M367.63-212H272q-24.75 0-42.375-17.625T212-272v-95.63L142-438q-9-9-13-19.814-4-10.813-4-22Q125-491 129-502t13-20l70-70.37V-688q0-24.75 17.625-42.375T272-748h95.63L438-818q9-9 19.814-13 10.813-4 22-4Q491-835 502-831t20 13l70.37 70H688q24.75 0 42.375 17.625T748-688v95.63L818-522q9 9 13 19.814 4 10.813 4 22Q835-469 831-458t-13 20l-70 70.37V-272q0 24.75-17.625 42.375T688-212h-95.63L522-142q-9 9-19.814 13-10.813 4-22 4Q469-125 458-129t-20-13l-70.37-70Zm58.217-140L459-320q9 9 21 9t21-9l33.153-32H578q12.75 0 21.375-8.625T608-382v-43.847L640-459q9-9 9-21t-9-21l-32-33.153V-578q0-12.75-8.625-21.375T578-608h-44l-38-38q-6.818-7-15.909-7Q471-653 464-646l-38 38h-44q-12.75 0-21.375 8.625T352-578v43.847L320-501q-9 9-9 21t9 21l32 33.153V-382q0 12.75 8.625 21.375T382-352h43.847Z"/>
    </Icon>
  );
});

IconMaterialExplosionW100Filled.displayName = 'AmauiIconMaterialExplosionW100Filled';

export default IconMaterialExplosionW100Filled;
