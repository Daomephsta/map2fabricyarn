let test = 
`
tiny	2	0	intermediary	named
c	net/minecraft/class_1792	net/minecraft/item/Item
	m	(Lnet/minecraft/class_1792$class_1793;)V	<init>	<init>
		p	1		settings
	m	()Z	method_16698	isNetworkSynced
	m	()Z	method_19263	isFood
		c	Checks if this item is food and therefore is edible.
	m	()Lnet/minecraft/class_4174;	method_19264	getFoodComponent
	m	()Lnet/minecraft/class_3414;	method_21830	getEatSound
	m	()Lnet/minecraft/class_3414;	method_21831	getDrinkSound
	m	(Lnet/minecraft/class_1282;)Z	method_24357	damage
		p	1		source
	m	()Z	method_24358	isFireproof
	m	(Lnet/minecraft/class_1937;Lnet/minecraft/class_1657;Lnet/minecraft/class_1268;)Lnet/minecraft/class_1271;	method_7836	use
		c	Called when an item is used by a player.\nThe use action, by default, is bound to the right mouse button.\n\n<p>This method is called on both the logical client and logical server, so take caution when overriding this method.\nThe logical side can be checked using {@link net.minecraft.world.World#isClient() world.isClient()}.\n\n@return a typed action result that specifies whether using the item was successful.\nThe action result contains the new item stack that the player's hand will be set to.
		p	1		world
			c	the world the item was used in
		p	2		user
			c	the player who used the item
		p	3		hand
			c	the hand used
	m	()I	method_7837	getEnchantability
		c	Gets the enchantability of an item.\nThis specifies the ability of an item to receive enchantments when enchanted using an enchanting table.\nAs the value increases, the amount and level of enchantments applied increase.\n\n<p>If the value of this method is 0, the item cannot be enchanted using an enchanting table.
	m	(Lnet/minecraft/class_1799;)Z	method_7838	isUsedOnRelease
		p	1		stack
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1937;Lnet/minecraft/class_1309;I)V	method_7840	onStoppedUsing
		p	1		stack
		p	2		world
		p	3		user
		p	4		remainingUseTicks
	m	()I	method_7841	getMaxDamage
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1937;Lnet/minecraft/class_1657;)V	method_7843	onCraft
		c	Called when a player acquires the item by crafting, smelting, smithing, etc.
		p	1		stack
		p	2		world
		p	3		player
	m	(Lnet/minecraft/class_1304;)Lcom/google/common/collect/Multimap;	method_7844	getAttributeModifiers
		p	1		slot
	m	()Z	method_7846	isDamageable
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1657;Lnet/minecraft/class_1309;Lnet/minecraft/class_1268;)Lnet/minecraft/class_1269;	method_7847	useOnEntity
		p	1		stack
		p	2		user
		p	3		entity
		p	4		hand
	m	()Lnet/minecraft/class_2561;	method_7848	getName
	m	(Lnet/minecraft/class_1761;Lnet/minecraft/class_2371;)V	method_7850	appendStacks
		p	1		group
		p	2		stacks
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1937;Ljava/util/List;Lnet/minecraft/class_1836;)V	method_7851	appendTooltip
		p	1		stack
		p	2		world
		p	3		tooltip
		p	4		context
	m	(Lnet/minecraft/class_1937;Lnet/minecraft/class_1309;Lnet/minecraft/class_1799;I)V	method_7852	usageTick
		p	1		world
		p	2		user
		p	3		stack
		p	4		remainingUseTicks
	m	(Lnet/minecraft/class_1799;)Lnet/minecraft/class_1839;	method_7853	getUseAction
		p	1		stack
	m	()Lnet/minecraft/class_1799;	method_7854	getDefaultStack
	m	(Lnet/minecraft/class_3494;)Z	method_7855	isIn
		p	1		tag
	m	(Lnet/minecraft/class_2680;)Z	method_7856	isEffectiveOn
		p	1		state
	m	()Z	method_7857	hasRecipeRemainder
		c	Checks if this item has a remainder item that is left behind when used as a crafting ingredient.
	m	()Lnet/minecraft/class_1792;	method_7858	getRecipeRemainder
		c	Gets the remainder item that should be left behind when this item is used as a crafting ingredient.
	m	()Lnet/minecraft/class_1761;	method_7859	getGroup
	m	(Lnet/minecraft/class_2487;)Z	method_7860	postProcessTag
		p	1		tag
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1937;Lnet/minecraft/class_1309;)Lnet/minecraft/class_1799;	method_7861	finishUsing
		p	1		stack
		p	2		world
		p	3		user
	m	(Lnet/minecraft/class_1799;)Lnet/minecraft/class_1814;	method_7862	getRarity
		p	1		stack
	m	(Lnet/minecraft/class_1799;)Lnet/minecraft/class_2561;	method_7864	getName
		p	1		stack
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_2680;)F	method_7865	getMiningSpeedMultiplier
		p	1		stack
		p	2		state
	m	(Lnet/minecraft/class_1799;)Ljava/lang/String;	method_7866	getTranslationKey
		c	Gets the translation key of this item using the provided item stack for context.
		p	1		stack
	m	(Lnet/minecraft/class_2248;)Lnet/minecraft/class_1792;	method_7867	fromBlock
		p	0		block
	m	()Ljava/lang/String;	method_7869	getOrCreateTranslationKey
	m	(Lnet/minecraft/class_1799;)Z	method_7870	isEnchantable
		p	1		stack
	m	(Lnet/minecraft/class_1937;Lnet/minecraft/class_1657;Lnet/minecraft/class_3959$class_242;)Lnet/minecraft/class_3965;	method_7872	raycast
		p	0		world
		p	1		player
		p	2		fluidHandling
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1309;Lnet/minecraft/class_1309;)Z	method_7873	postHit
		p	1		stack
		p	2		target
		p	3		attacker
	m	(I)Lnet/minecraft/class_1792;	method_7875	byRawId
		p	0		id
	m	()Ljava/lang/String;	method_7876	getTranslationKey
		c	Gets the translation key of this item.
	m	(Lnet/minecraft/class_1761;)Z	method_7877	isIn
		c	Checks whether this item should appear in a specified item group.\n\n@return true if the item is in the specified item group or the item group is {@link net.minecraft.item.ItemGroup#SEARCH}.
		p	1		group
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1799;)Z	method_7878	canRepair
		p	1		stack
		p	2		ingredient
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1937;Lnet/minecraft/class_2680;Lnet/minecraft/class_2338;Lnet/minecraft/class_1309;)Z	method_7879	postMine
		p	1		stack
		p	2		world
		p	3		state
		p	4		pos
		p	5		miner
	m	(Lnet/minecraft/class_1792;)I	method_7880	getRawId
		p	0		item
	m	(Lnet/minecraft/class_1799;)I	method_7881	getMaxUseTime
		p	1		stack
	m	()I	method_7882	getMaxCount
	m	(Lnet/minecraft/class_1838;)Lnet/minecraft/class_1269;	method_7884	useOnBlock
		c	Called when an item is used on a block.\n\n<p>This method is called on both the logical client and logical server, so take caution when using this method.\nThe logical side can be checked using {@link net.minecraft.world.World#isClient() context.getWorld().isClient()}.\n\n@return an action result that specifies if using the item on a block was successful.
		p	1		context
			c	the usage context
	m	(Lnet/minecraft/class_2680;Lnet/minecraft/class_1937;Lnet/minecraft/class_2338;Lnet/minecraft/class_1657;)Z	method_7885	canMine
		c	Checks if a player can break a block while holding the item.
		p	1		state
		p	2		world
		p	3		pos
		p	4		miner
	m	(Lnet/minecraft/class_1799;)Z	method_7886	hasGlint
		c	Checks if the glint effect should be applied when the item is rendered.\n\n<p>By default, returns true if the item has enchantments.
		p	1		stack
	m	()Z	method_7887	shouldSyncTagToClient
		c	Checks if an item should have its NBT data stored in {@link #tag} sent to the client.\n\n<p>If an item is damageable, this method is ignored and data is always synced to client.
	m	(Lnet/minecraft/class_1799;Lnet/minecraft/class_1937;Lnet/minecraft/class_1297;IZ)V	method_7888	inventoryTick
		p	1		stack
		p	2		world
		p	3		entity
		p	4		slot
		p	5		selected
	f	Lnet/minecraft/class_4174;	field_18672	foodComponent
	f	Z	field_21979	fireproof
	f	Ljava/util/UUID;	field_8001	ATTACK_SPEED_MODIFIER_ID
	f	Ljava/util/Map;	field_8003	BLOCK_ITEMS
	f	Lnet/minecraft/class_1761;	field_8004	group
	f	Ljava/util/Random;	field_8005	RANDOM
	f	Ljava/util/UUID;	field_8006	ATTACK_DAMAGE_MODIFIER_ID
	f	Lnet/minecraft/class_1792;	field_8008	recipeRemainder
	f	Lnet/minecraft/class_1814;	field_8009	rarity
	f	I	field_8012	maxDamage
	f	I	field_8013	maxCount
	f	Ljava/lang/String;	field_8014	translationKey
c	net/minecraft/class_1792$class_1793	net/minecraft/item/Item$Settings
	m	(Lnet/minecraft/class_4174;)Lnet/minecraft/class_1792$class_1793;	method_19265	food
		p	1		foodComponent
	m	()Lnet/minecraft/class_1792$class_1793;	method_24359	fireproof
	m	(I)Lnet/minecraft/class_1792$class_1793;	method_7889	maxCount
		p	1		maxCount
	m	(Lnet/minecraft/class_1761;)Lnet/minecraft/class_1792$class_1793;	method_7892	group
		p	1		group
	m	(Lnet/minecraft/class_1814;)Lnet/minecraft/class_1792$class_1793;	method_7894	rarity
		p	1		rarity
	m	(I)Lnet/minecraft/class_1792$class_1793;	method_7895	maxDamage
		p	1		maxDamage
	m	(Lnet/minecraft/class_1792;)Lnet/minecraft/class_1792$class_1793;	method_7896	recipeRemainder
		p	1		recipeRemainder
	m	(I)Lnet/minecraft/class_1792$class_1793;	method_7898	maxDamageIfAbsent
		p	1		maxDamage
	f	Lnet/minecraft/class_4174;	field_18673	foodComponent
	f	Z	field_21980	fireproof
	f	Lnet/minecraft/class_1814;	field_8016	rarity
	f	Lnet/minecraft/class_1761;	field_8017	group
	f	Lnet/minecraft/class_1792;	field_8018	recipeRemainder
	f	I	field_8019	maxDamage
	f	I	field_8020	maxCount
c	net/minecraft/class_1761	net/minecraft/item/ItemGroup
	m	(ILjava/lang/String;)V	<init>	<init>
		p	1		index
		p	2		id
	m	()Lnet/minecraft/class_2561;	method_7737	getTranslationKey
	m	(Lnet/minecraft/class_2371;)V	method_7738	appendStacks
		p	1		stacks
	m	(Ljava/lang/String;)Lnet/minecraft/class_1761;	method_7739	setName
		p	1		name
	m	(Lnet/minecraft/class_1886;)Z	method_7740	containsEnchantments
		p	1		target
	m	()I	method_7741	getIndex
	m	()Ljava/lang/String;	method_7742	getTexture
	m	()I	method_7743	getColumn
	m	()[Lnet/minecraft/class_1886;	method_7744	getEnchantments
	m	([Lnet/minecraft/class_1886;)Lnet/minecraft/class_1761;	method_7745	setEnchantments
		p	1		targets
	m	()Lnet/minecraft/class_1799;	method_7747	getIcon
	m	()Lnet/minecraft/class_1761;	method_7748	hideName
		c	Specifies that when this item group is selected, the name of the item group should not be rendered.
	m	()Lnet/minecraft/class_1761;	method_7749	setNoScrollbar
	m	()Lnet/minecraft/class_1799;	method_7750	createIcon
	m	()Ljava/lang/String;	method_7751	getName
	m	()Z	method_7752	isSpecial
	m	(Ljava/lang/String;)Lnet/minecraft/class_1761;	method_7753	setTexture
		p	1		texture
	m	()Z	method_7754	shouldRenderName
		c	Checks if this item group should render its name.\n\n<p>The name is rendered below the top row of item groups and above the inventory.
	m	()Z	method_7755	isTopRow
	m	()Z	method_7756	hasScrollbar
	f	Lnet/minecraft/class_2561;	field_26391	translationKey
	f	Lnet/minecraft/class_1761;	field_7914	REDSTONE
	f	Lnet/minecraft/class_1761;	field_7915	SEARCH
	f	Lnet/minecraft/class_1761;	field_7916	COMBAT
	f	Z	field_7917	renderName
	f	Lnet/minecraft/class_1761;	field_7918	INVENTORY
	f	Ljava/lang/String;	field_7919	texture
	f	Z	field_7920	scrollbar
	f	[Lnet/minecraft/class_1761;	field_7921	GROUPS
	f	Lnet/minecraft/class_1761;	field_7922	FOOD
	f	Lnet/minecraft/class_1761;	field_7923	TRANSPORTATION
	f	Lnet/minecraft/class_1761;	field_7924	BREWING
	f	Lnet/minecraft/class_1761;	field_7925	HOTBAR
	f	Ljava/lang/String;	field_7926	name
	f	[Lnet/minecraft/class_1886;	field_7927	enchantments
	f	Lnet/minecraft/class_1761;	field_7928	DECORATIONS
	f	Lnet/minecraft/class_1761;	field_7929	MATERIALS
	f	Lnet/minecraft/class_1761;	field_7930	TOOLS
	f	Lnet/minecraft/class_1761;	field_7931	BUILDING_BLOCKS
	f	Lnet/minecraft/class_1761;	field_7932	MISC
	f	I	field_7933	index
	f	Lnet/minecraft/class_1799;	field_7934	icon
	f	Ljava/lang/String;	field_7935	id
c	net/minecraft/class_2378	net/minecraft/util/registry/Registry
	m	(Lnet/minecraft/class_5321;Lcom/mojang/serialization/Lifecycle;)V	<init>	<init>
		p	1		key
		p	2		lifecycle
	m	()Ljava/util/stream/Stream;	method_10220	stream
	m	(Ljava/lang/Object;)Lnet/minecraft/class_2960;	method_10221	getId
		p	1		entry
	m	(Lnet/minecraft/class_2960;)Ljava/lang/Object;	method_10223	get
		p	1		id
	m	(Lnet/minecraft/class_5321;Ljava/lang/String;Ljava/util/function/Supplier;)Lnet/minecraft/class_2348;	method_10224	create
		p	1		defaultId
		p	2		defaultEntry
	m	(Lnet/minecraft/class_2378;Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;	method_10226	register
		p	0		registry
		p	1		id
		p	2		entry
	m	(Lnet/minecraft/class_5321;Lnet/minecraft/class_2385;Ljava/util/function/Supplier;Lcom/mojang/serialization/Lifecycle;)Lnet/minecraft/class_2385;	method_10227	create
		p	1		registry
		p	2		defaultEntry
	m	(Lnet/minecraft/class_2378;Lnet/minecraft/class_2960;Ljava/lang/Object;)Ljava/lang/Object;	method_10230	register
		p	0		registry
		p	1		id
		p	2		entry
	m	(Lnet/minecraft/class_2378;ILjava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;	method_10231	register
		p	0		registry
		p	1		rawId
		p	2		id
		p	3		entry
	m	()Ljava/util/Set;	method_10235	getIds
	m	(Lnet/minecraft/class_5321;Ljava/util/function/Supplier;)Lnet/minecraft/class_2378;	method_10247	create
		p	1		defaultEntry
	m	(Lnet/minecraft/class_2960;)Z	method_10250	containsId
		p	1		id
	m	(Lnet/minecraft/class_2960;)Ljava/util/Optional;	method_17966	getOrEmpty
		p	1		id
	m	(Lnet/minecraft/class_2385;)V	method_29103	validate
		p	0		registry
	m	(Ljava/lang/String;)Lnet/minecraft/class_5321;	method_29106	createRegistryKey
		p	0		registryId
	m	(Lnet/minecraft/class_5321;)Ljava/lang/Object;	method_29107	get
		p	1		key
	m	(Lnet/minecraft/class_5321;Lcom/mojang/serialization/Lifecycle;Ljava/util/function/Supplier;)Lnet/minecraft/class_2378;	method_29108	create
		p	2		defaultEntry
	m	(Lnet/minecraft/class_5321;Ljava/lang/String;Lcom/mojang/serialization/Lifecycle;Ljava/util/function/Supplier;)Lnet/minecraft/class_2348;	method_29109	create
		p	1		defaultId
		p	3		defaultEntry
	m	(Ljava/lang/Object;)Ljava/util/Optional;	method_29113	getKey
		p	1		entry
	m	()Ljava/util/Set;	method_29722	getEntries
	m	()Lnet/minecraft/class_5321;	method_30517	getKey
	m	()Lcom/mojang/serialization/Lifecycle;	method_31138	getLifecycle
	m	(Ljava/lang/Object;)Lcom/mojang/serialization/Lifecycle;	method_31139	getEntryLifecycle
		c	Gets the lifecycle of a registry entry.
	m	(Lnet/minecraft/class_5321;)Ljava/lang/Object;	method_31140	getOrThrow
		c	Gets an entry from the registry.\n\n@throws IllegalStateException if the entry was not present in the registry
		p	1		key
	m	(Lnet/minecraft/class_5321;)Ljava/util/Optional;	method_31189	getOrEmpty
		p	1		key
	f	Lnet/minecraft/class_2378;	field_11137	BLOCK_ENTITY_TYPE
	f	Lnet/minecraft/class_2378;	field_11138	FEATURE
	f	Lorg/apache/logging/log4j/Logger;	field_11139	LOGGER
	f	Ljava/util/Map;	field_11140	DEFAULT_ENTRIES
	f	Lnet/minecraft/class_2378;	field_11141	PARTICLE_TYPE
	f	Lnet/minecraft/class_2348;	field_11142	ITEM
	f	Lnet/minecraft/class_2348;	field_11143	POTION
	f	Lnet/minecraft/class_2378;	field_11144	REGISTRIES
	f	Lnet/minecraft/class_2348;	field_11145	ENTITY_TYPE
	f	Lnet/minecraft/class_2348;	field_11146	BLOCK
	f	Lnet/minecraft/class_2378;	field_11147	SURFACE_BUILDER
	f	Lnet/minecraft/class_2378;	field_11148	DECORATOR
	f	Lnet/minecraft/class_2348;	field_11150	PAINTING_MOTIVE
	f	Lnet/minecraft/class_2378;	field_11152	STAT_TYPE
	f	Lnet/minecraft/class_2348;	field_11154	FLUID
	f	Lnet/minecraft/class_2378;	field_11156	SOUND_EVENT
	f	Lnet/minecraft/class_2378;	field_11157	CARVER
	f	Lnet/minecraft/class_2378;	field_11158	CUSTOM_STAT
	f	Lnet/minecraft/class_2378;	field_11159	STATUS_EFFECT
	f	Lnet/minecraft/class_2378;	field_11160	ENCHANTMENT
	f	Lnet/minecraft/class_2348;	field_16643	CHUNK_STATUS
	f	Lnet/minecraft/class_2378;	field_16644	STRUCTURE_FEATURE
	f	Lnet/minecraft/class_2378;	field_16645	STRUCTURE_PIECE
	f	Lnet/minecraft/class_2378;	field_16792	RULE_TEST
	f	Lnet/minecraft/class_2378;	field_16793	STRUCTURE_POOL_ELEMENT
	f	Lnet/minecraft/class_2378;	field_16794	STRUCTURE_PROCESSOR
	f	Lnet/minecraft/class_2348;	field_17166	VILLAGER_TYPE
	f	Lnet/minecraft/class_2348;	field_17167	VILLAGER_PROFESSION
	f	Lnet/minecraft/class_2378;	field_17429	SCREEN_HANDLER
	f	Lnet/minecraft/class_2378;	field_17597	RECIPE_TYPE
	f	Lnet/minecraft/class_2378;	field_17598	RECIPE_SERIALIZER
	f	Lnet/minecraft/class_2348;	field_18792	POINT_OF_INTEREST_TYPE
	f	Lnet/minecraft/class_2348;	field_18793	MEMORY_MODULE_TYPE
	f	Lnet/minecraft/class_2348;	field_18794	SENSOR_TYPE
	f	Lnet/minecraft/class_2378;	field_18795	SCHEDULE
	f	Lnet/minecraft/class_2378;	field_18796	ACTIVITY
	f	Lnet/minecraft/class_2378;	field_21445	BLOCK_STATE_PROVIDER_TYPE
	f	Lnet/minecraft/class_2378;	field_21446	BLOCK_PLACER_TYPE
	f	Lnet/minecraft/class_2378;	field_21447	FOLIAGE_PLACER_TYPE
	f	Lnet/minecraft/class_2378;	field_21448	TREE_DECORATOR_TYPE
	f	Lnet/minecraft/class_2378;	field_23398	POS_RULE_TEST
	f	Lnet/minecraft/class_2378;	field_23781	ATTRIBUTE
	f	Lnet/minecraft/class_2378;	field_23782	TRUNK_PLACER_TYPE
	f	Lnet/minecraft/class_2378;	field_24331	FEATURE_SIZE_TYPE
	f	Lnet/minecraft/class_5321;	field_25068	TREE_DECORATOR_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25069	FEATURE_SIZE_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25070	PARTICLE_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25071	BIOME_SOURCE_KEY
	f	Lnet/minecraft/class_5321;	field_25072	CHUNK_GENERATOR_KEY
	f	Lnet/minecraft/class_5321;	field_25073	BLOCK_ENTITY_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25074	MOTIVE_KEY
	f	Lnet/minecraft/class_5321;	field_25075	CUSTOM_STAT_KEY
	f	Lnet/minecraft/class_5321;	field_25076	CHUNK_STATUS_KEY
	f	Lnet/minecraft/class_5321;	field_25077	STRUCTURE_FEATURE_KEY
	f	Lnet/minecraft/class_5321;	field_25078	STRUCTURE_PIECE_KEY
	f	Lnet/minecraft/class_5321;	field_25079	RULE_TEST_KEY
	f	Lnet/minecraft/class_5321;	field_25080	POS_RULE_TEST_KEY
	f	Lnet/minecraft/class_5321;	field_25081	STRUCTURE_PROCESSOR_KEY
	f	Lnet/minecraft/class_5321;	field_25082	STRUCTURE_POOL_ELEMENT_KEY
	f	Lnet/minecraft/class_5321;	field_25083	MENU_KEY
	f	Lnet/minecraft/class_5321;	field_25084	RECIPE_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25085	RECIPE_SERIALIZER_KEY
	f	Lnet/minecraft/class_5321;	field_25086	ATTRIBUTE_KEY
	f	Lnet/minecraft/class_5321;	field_25087	STAT_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25088	VILLAGER_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25089	VILLAGER_PROFESSION_KEY
	f	Lnet/minecraft/class_5321;	field_25090	POINT_OF_INTEREST_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25091	MEMORY_MODULE_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25092	SENSOR_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25093	SCHEDULE_KEY
	f	Lnet/minecraft/class_5321;	field_25094	ACTIVITY_KEY
	f	Lnet/minecraft/class_5321;	field_25095	DIMENSION_TYPE_KEY
	f	Lnet/minecraft/class_2378;	field_25096	BIOME_SOURCE
	f	Lnet/minecraft/class_2378;	field_25097	CHUNK_GENERATOR
	f	Lnet/minecraft/class_5321;	field_25098	registryKey
		c	The {@linkplain RegistryKey} representing the ID of the actual registry.
	f	Lcom/mojang/serialization/Lifecycle;	field_25099	lifecycle
	f	Lnet/minecraft/class_2960;	field_25100	ROOT_KEY
	f	Lnet/minecraft/class_2385;	field_25101	ROOT
	f	Lnet/minecraft/class_5321;	field_25102	SOUND_EVENT_KEY
	f	Lnet/minecraft/class_5321;	field_25103	FLUID_KEY
	f	Lnet/minecraft/class_5321;	field_25104	MOB_EFFECT_KEY
	f	Lnet/minecraft/class_5321;	field_25105	BLOCK_KEY
	f	Lnet/minecraft/class_5321;	field_25106	ENCHANTMENT_KEY
	f	Lnet/minecraft/class_5321;	field_25107	ENTITY_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25108	ITEM_KEY
	f	Lnet/minecraft/class_5321;	field_25109	POTION_KEY
	f	Lnet/minecraft/class_5321;	field_25110	CARVER_KEY
	f	Lnet/minecraft/class_5321;	field_25111	SURFACE_BUILD_KEY
	f	Lnet/minecraft/class_5321;	field_25112	FEATURE_KEY
	f	Lnet/minecraft/class_5321;	field_25113	DECORATOR_KEY
	f	Lnet/minecraft/class_5321;	field_25114	BIOME_KEY
	f	Lnet/minecraft/class_5321;	field_25115	BLOCK_STATE_PROVIDER_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25116	BLOCK_PLACER_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25117	FOLIAGE_PLACER_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25118	TRUNK_PLACER_TYPE_KEY
	f	Lnet/minecraft/class_2378;	field_25293	LOOT_POOL_ENTRY_TYPE
	f	Lnet/minecraft/class_2378;	field_25294	LOOT_FUNCTION_TYPE
	f	Lnet/minecraft/class_5321;	field_25295	LOOT_POOL_ENTRY_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25296	LOOT_FUNCTION_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25297	LOOT_CONDITION_TYPE_KEY
	f	Lnet/minecraft/class_5321;	field_25298	DIMENSION
	f	Lnet/minecraft/class_2378;	field_25299	LOOT_CONDITION_TYPE
	f	Lnet/minecraft/class_5321;	field_25490	DIMENSION_OPTIONS
	f	Lnet/minecraft/class_5321;	field_25912	CONFIGURED_SURFACE_BUILDER_WORLDGEN
	f	Lnet/minecraft/class_5321;	field_25913	CONFIGURED_CARVER_WORLDGEN
	f	Lnet/minecraft/class_5321;	field_25914	CONFIGURED_FEATURE_WORLDGEN
	f	Lnet/minecraft/class_5321;	field_25915	CONFIGURED_STRUCTURE_FEATURE_WORLDGEN
	f	Lnet/minecraft/class_5321;	field_25916	PROCESSOR_LIST_WORLDGEN
	f	Lnet/minecraft/class_5321;	field_25917	TEMPLATE_POOL_WORLDGEN
	f	Lnet/minecraft/class_5321;	field_26374	NOISE_SETTINGS_WORLDGEN
c	net/minecraft/class_2960	net/minecraft/util/Identifier
	c	The namespace and path must contain only lowercase letters ([a-z]), digits ([0-9]), or the characters '_', '.', and '-'. The path can also contain the standard path separator '/'.
	m	(Ljava/lang/String;)V	<init>	<init>
		c	<p>Takes a string of the form {@code <namespace>:<path>}, for example {@code minecraft:iron_ingot}.</p>\n<p>The string will be split (on the {@code :}) into an identifier with the specified path and namespace.</p>\nPrefer using the {@link #Identifier(java.lang.String, java.lang.String)} constructor that takes the namespace and path as individual parameters to avoid mistakes.\n@throws InvalidIdentifierException if the string cannot be parsed as an identifier.
		p	1		id
	m	(Ljava/lang/String;Ljava/lang/String;)V	<init>	<init>
		p	1		namespace
		p	2		path
	m	([Ljava/lang/String;)V	<init>	<init>
		p	1		id
	m	(Ljava/lang/String;)Lnet/minecraft/class_2960;	method_12829	tryParse
		c	<p>Parses a string into an {@code Identifier}.</p>\nTakes a string of the form {@code <namespace>:<path>}, for example {@code minecraft:iron_ingot}.\n@return resulting identifier, or {@code null} if the string couldn't be parsed as an identifier
		p	0		id
	m	(Ljava/lang/String;C)[Ljava/lang/String;	method_12830	split
		p	0		id
		p	1		delimiter
	m	(C)Z	method_12831	isCharValid
		p	0		c
	m	()Ljava/lang/String;	method_12832	getPath
	m	(Lnet/minecraft/class_2960;)I	method_12833	compareTo
	m	(Lcom/mojang/brigadier/StringReader;)Lnet/minecraft/class_2960;	method_12835	fromCommandInput
		p	0		reader
	m	()Ljava/lang/String;	method_12836	getNamespace
	m	(Ljava/lang/String;C)Lnet/minecraft/class_2960;	method_12838	splitOn
		p	0		id
		p	1		delimiter
	m	(Ljava/lang/String;)Z	method_20207	isValid
		p	0		id
	m	(Ljava/lang/String;)Z	method_20208	isPathValid
		p	0		path
	m	(Ljava/lang/String;)Z	method_20209	isNamespaceValid
		p	0		namespace
	m	(C)Z	method_29184	isPathCharacterValid
	m	(C)Z	method_29185	isNamespaceCharacterValid
	f	Ljava/lang/String;	field_13353	namespace
	f	Lcom/mojang/brigadier/exceptions/SimpleCommandExceptionType;	field_13354	COMMAND_EXCEPTION
	f	Ljava/lang/String;	field_13355	path
	f	Lcom/mojang/serialization/Codec;	field_25139	CODEC
`

let classes = new Map()
let methods = new Map()
let fields = new Map()

function loadMappings()
{
	for (let line of test.split('\n'))
	{
		let tokens = line.split('\t')
		if (tokens['0'] === 'c')
		{
			classes.set(tokens[1].split(/\/|\$/).pop(), 
				tokens[2].replaceAll('/', '.'))
		}
		else if (tokens[1] === 'm')
			methods.set(tokens[3], tokens[4])
		else if (tokens[1] === 'f')
			fields.set(tokens[3], tokens[4])
	}
}

function domContentLoaded()
{
	loadMappings();
	for (let target of document.querySelectorAll('.doku-yarn-code-block'))
	{
		target.textContent = target.textContent.replace(
			/(net\.minecraft\.class|class|method|field)_\d+/g, function(match, p1)
		{
			switch (p1)
			{
				// Fully qualified intermediary class names are replaced 
				// with fully qualified yarn class names
				case 'net.minecraft.class':
					return classes.get(getSimpleName(match)) || match
				// Simple intermediary class names are replaced with 
				// simple yarn class names. 
				case 'class':
					return getSimpleName(classes.get(match)) || match
				case 'method':
					return methods.get(match) || match
				case 'field':
					return fields.get(match) || match
			}
		})
	}
}
document.addEventListener('DOMContentLoaded', domContentLoaded)

function getSimpleName(qualifiedName)
{
	return qualifiedName.split(/\.|\$/).pop()
}

